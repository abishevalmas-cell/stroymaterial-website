import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Calendar, Clock, ArrowRight, TrendingUp, Truck, MessageSquare } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Как AI меняет закупку стройматериалов',
    excerpt: 'Рассказываем, как искусственный интеллект помогает находить лучшие цены и экономить до 30% на закупках.',
    category: 'Технологии',
    date: '10 апреля 2025',
    readTime: '5 мин',
    icon: MessageSquare,
  },
  {
    id: 2,
    title: 'Топ-10 ошибок при расчёте материалов',
    excerpt: 'Разбираем самые частые ошибки при расчёте цемента, арматуры и других материалов для фундамента.',
    category: 'Советы',
    date: '7 апреля 2025',
    readTime: '7 мин',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Логистика стройматериалов: тренды 2025',
    excerpt: 'Как меняются правила доставки строительных материалов в Казахстане и что ждать в этом году.',
    category: 'Логистика',
    date: '3 апреля 2025',
    readTime: '6 мин',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Кэшбэк на стройматериалы: как это работает',
    excerpt: 'Подробный гайд по программе кэшбэка Stroymaterial.kz — сколько можно вернуть и как тратить бонусы.',
    category: 'Акции',
    date: '28 марта 2025',
    readTime: '4 мин',
    icon: TrendingUp,
  },
  {
    id: 5,
    title: 'Сравнение цен: как найти лучшую цену',
    excerpt: 'Инструкция по использованию функции сравнения цен в приложении для экономии на крупных заказах.',
    category: 'Советы',
    date: '22 марта 2025',
    readTime: '5 мин',
    icon: TrendingUp,
  },
  {
    id: 6,
    title: 'Новые поставщики в Алматы и Астане',
    excerpt: 'Рассказываем о новых партнёрах платформы и их ассортименте строительных материалов.',
    category: 'Новости',
    date: '15 марта 2025',
    readTime: '3 мин',
    icon: TrendingUp,
  },
]

const categories = ['Все', 'Технологии', 'Советы', 'Логистика', 'Акции', 'Новости']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Блог <span className="text-primary">Stroymaterial.kz</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              Новости, советы и аналитика рынка строительных материалов
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 100}>
                  <Link
                    href={`/blog/${post.id}`}
                    className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all block h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-accent-surface rounded-lg flex items-center justify-center">
                        <post.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs text-primary font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
