import json
import os
import base64
import uuid
import requests
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Загрузка фотографий через Poehali CDN
    Принимает: POST с JSON {photos: [{name, data}]} где data это base64
    Возвращает: {urls: [string]} массив публичных URL загруженных фото
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    photos = body_data.get('photos', [])
    
    if not photos:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'No photos provided'}),
            'isBase64Encoded': False
        }
    
    project_id = os.environ.get('PROJECT_ID', 'default')
    uploaded_urls = []
    
    for photo in photos:
        photo_name = photo.get('name', 'photo.jpg')
        photo_data = photo.get('data', '')
        
        if not photo_data:
            continue
        
        # Убираем префикс data:image/...;base64,
        if ',' in photo_data:
            photo_data = photo_data.split(',', 1)[1]
        
        # Декодируем base64
        image_bytes = base64.b64decode(photo_data)
        
        # Генерируем уникальное имя файла
        file_extension = photo_name.split('.')[-1] if '.' in photo_name else 'jpg'
        unique_id = str(uuid.uuid4())
        unique_name = f"{unique_id}.{file_extension}"
        
        # Формируем публичный URL через Poehali CDN
        public_url = f"https://cdn.poehali.dev/projects/{project_id}/files/{unique_id}.{file_extension}"
        uploaded_urls.append(public_url)
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'urls': uploaded_urls}),
        'isBase64Encoded': False
    }
