import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'recipes', label: 'Рецепты', icon: 'BookOpen' },
    { id: 'products', label: 'Продукция', icon: 'ShoppingBag' },
    { id: 'blog', label: 'Блог', icon: 'Newspaper' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'about', label: 'О нас', icon: 'Users' },
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/783f1186-cdd9-48c6-a023-93c56b480f99/files/8104c833-3465-4424-b8d6-913e17fcb413.jpg',
      title: 'Хлеб ремесленный',
      category: 'Хлеб',
      description: 'Свежий хлеб на закваске'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/783f1186-cdd9-48c6-a023-93c56b480f99/files/95cabb8e-0d76-4384-b806-fde0ad531792.jpg',
      title: 'Французская выпечка',
      category: 'Выпечка',
      description: 'Круассаны и эклеры'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/783f1186-cdd9-48c6-a023-93c56b480f99/files/9e8677dc-f250-40e1-a27e-3b6b25eee08b.jpg',
      title: 'Ручная работа',
      category: 'Процесс',
      description: 'С любовью и заботой'
    },
  ];

  const recipes = [
    {
      id: 1,
      title: 'Классический багет',
      time: '4 часа',
      difficulty: 'Средне',
      icon: 'ChefHat'
    },
    {
      id: 2,
      title: 'Круассаны с шоколадом',
      time: '6 часов',
      difficulty: 'Сложно',
      icon: 'Croissant'
    },
    {
      id: 3,
      title: 'Домашний хлеб на закваске',
      time: '24 часа',
      difficulty: 'Средне',
      icon: 'Wheat'
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Бородинский хлеб',
      price: '150 ₽',
      weight: '500г'
    },
    {
      id: 2,
      name: 'Круассан классический',
      price: '80 ₽',
      weight: '70г'
    },
    {
      id: 3,
      name: 'Булочка с корицей',
      price: '90 ₽',
      weight: '100г'
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Секреты идеального хлеба',
      date: '15 октября 2025',
      preview: 'Узнайте, как приготовить хлеб с хрустящей корочкой и мягким мякишем'
    },
    {
      id: 2,
      title: 'История французской выпечки',
      date: '12 октября 2025',
      preview: 'Погрузитесь в мир круассанов и багетов'
    },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wheat" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">БулкаХлеб</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-secondary'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/783f1186-cdd9-48c6-a023-93c56b480f99/files/8104c833-3465-4424-b8d6-913e17fcb413.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Свежая выпечка
              <br />
              каждый день
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ремесленный хлеб и авторская выпечка с доставкой по городу
            </p>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Рецепты
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-white" />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-lg px-4 py-2">Галерея</Badge>
              <h2 className="text-5xl font-bold mb-4">Наши изделия</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Аппетитная свежая выпечка, приготовленная с любовью
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <Badge className="mb-2 bg-primary">{item.category}</Badge>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="recipes" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-lg px-4 py-2">Рецепты</Badge>
              <h2 className="text-5xl font-bold mb-4">Научитесь печь</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Пошаговые рецепты от профессиональных пекарей
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recipes.map((recipe, index) => (
                <Card 
                  key={recipe.id} 
                  className="hover:shadow-xl transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={recipe.icon as any} size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{recipe.title}</h3>
                    <div className="flex gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="BarChart" size={16} />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                    <Button className="mt-6 w-full">
                      Посмотреть рецепт
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-lg px-4 py-2">Продукция</Badge>
              <h2 className="text-5xl font-bold mb-4">Наш ассортимент</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свежая выпечка каждый день
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <Badge variant="outline">{product.weight}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-primary">{product.price}</span>
                      <Button size="sm">
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-lg px-4 py-2">Блог</Badge>
              <h2 className="text-5xl font-bold mb-4">Полезные статьи</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Читайте о выпечке, секретах и традициях
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="hover:shadow-xl transition-shadow animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Icon name="Calendar" size={16} />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.preview}</p>
                    <Button variant="link" className="px-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 text-lg px-4 py-2">Доставка</Badge>
                <h2 className="text-5xl font-bold mb-4">Доставим свежей</h2>
                <p className="text-xl text-muted-foreground">
                  Быстрая доставка по всему городу
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">30-60 минут</h3>
                  <p className="text-muted-foreground">Среднее время доставки</p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="MapPin" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">По всему городу</h3>
                  <p className="text-muted-foreground">Доставка в любую точку</p>
                </Card>

                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Gift" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Бесплатно от 1000₽</h3>
                  <p className="text-muted-foreground">При заказе от 1000 рублей</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 text-lg px-4 py-2 bg-white text-primary">О нас</Badge>
              <h2 className="text-5xl font-bold mb-6">Наша история</h2>
              <p className="text-xl mb-8 opacity-90">
                Мы начали печь хлеб 10 лет назад в маленькой пекарне. Сегодня наша команда
                профессионалов создает лучшую выпечку в городе, используя только натуральные
                ингредиенты и традиционные рецепты.
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                <div>
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="opacity-90">лет опыта</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="opacity-90">видов изделий</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">1000+</div>
                  <div className="opacity-90">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wheat" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">БулкаХлеб</h3>
              </div>
              <p className="text-gray-400">
                Лучшая выпечка в городе с 2015 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@bulkahleb.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Хлебная, 1
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 БулкаХлеб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
