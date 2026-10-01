import './globals.css';
export const metadata={title:'DevNova Studio',description:'Создаём цифровые решения для бизнеса'};
export default function Layout({children}){return <html lang="ru"><body><div className="wrap"><nav><a className="logo" href="/">DEV<b>NOVA</b></a><div className="links"><a href="/#services">Услуги</a><a href="/order">Заказать</a><a href="/dashboard">Мои заказы</a><a href="/admin">Админка</a></div></nav></div>{children}<footer><div className="wrap">© 2026 DevNova Studio · Создаём цифровые решения для бизнеса</div></footer></body></html>}
