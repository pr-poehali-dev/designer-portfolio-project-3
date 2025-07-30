import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-sm"></div>
            <span className="font-serif font-semibold text-xl">
              Анна Петрова
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              Обо мне
            </a>
            <a href="#works" className="hover:text-primary transition-colors">
              Работы
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-primary text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>UX/UI ДИЗАЙНЕР</span>
                </div>
                <h1 className="font-serif text-6xl lg:text-8xl font-bold tracking-tight">Пр</h1>
                <div className="space-y-2">
                  <p className="text-xl lg:text-2xl font-light text-muted-foreground">
                    Создаю пользовательские интерфейсы
                  </p>
                  <p className="text-xl lg:text-2xl font-light text-muted-foreground">
                    и улучшаю опыт взаимодействия
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span>Москва, Россия</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>anna.petrova@email.com</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <Icon name="Linkedin" size={16} className="text-primary" />
                  <span>linkedin.com/in/anna-petrova</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Посмотреть работы
                  <Icon name="ArrowDown" size={16} className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Скачать резюме
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border">
                  <img
                    src="/img/dc31097a-21cf-4052-8965-9ca31dea50bf.jpg"
                    alt="Анна Петрова - UX/UI Дизайнер"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-8 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                5+ лет опыта
              </div>

              <div className="absolute bottom-8 -left-4 bg-card border border-border px-4 py-2 rounded-full text-sm">
                50+ проектов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold">
              Привет, я Анна!
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Я UX/UI дизайнер с опытом работы более 5 лет. Специализируюсь на
              создании интуитивных и красивых пользовательских интерфейсов для
              веб и мобильных приложений. Моя цель — сделать цифровые продукты
              удобными и доступными для всех.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">UI Дизайн</h3>
                <p className="text-muted-foreground">
                  Создание визуально привлекательных интерфейсов
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">
                  UX Исследования
                </h3>
                <p className="text-muted-foreground">
                  Анализ пользователей и оптимизация опыта
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Smartphone" size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">
                  Мобильный дизайн
                </h3>
                <p className="text-muted-foreground">
                  Адаптивные решения для всех устройств
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                Избранные работы
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ознакомьтесь с некоторыми из моих последних проектов в области
                UX/UI дизайна
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src="/img/d6e8ddb0-93aa-4fbb-9469-ffd32696f6df.jpg"
                      alt="Мобильное приложение для фитнеса"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-xl">
                      Мобильное приложение для фитнеса
                    </CardTitle>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Дизайн приложения для отслеживания тренировок с интуитивным
                    интерфейсом и персонализированными рекомендациями.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      UI/UX
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Мобильный дизайн
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Прототипирование
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src="/img/4e97594d-59fc-458b-88a2-7fdad53b42d6.jpg"
                      alt="E-commerce платформа"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-xl">
                      E-commerce платформа
                    </CardTitle>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    Редизайн интернет-магазина с фокусом на увеличение конверсии
                    и улучшение пользовательского опыта покупок.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      Веб-дизайн
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      UX аудит
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      A/B тестирование
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Посмотреть все проекты
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold">
                Давайте создадим что-то вместе
              </h2>
              <p className="text-lg text-muted-foreground">
                Готова обсудить ваш проект и найти лучшие решения для ваших
                пользователей
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    anna.petrova@email.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Linkedin" size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">anna-petrova</p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon
                      name="MessageCircle"
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="font-semibold">Telegram</h3>
                  <p className="text-muted-foreground">@anna_design</p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              Начать проект
              <Icon name="Send" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-sm"></div>
              <span className="font-serif font-semibold text-lg">
                Анна Петрова
              </span>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              © 2024 Анна Петрова. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}