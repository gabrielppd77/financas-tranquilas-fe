import Container from "./components/container";

import Presentation from "./components/presentation";
import ContactMe from "./components/contact-me";
import sections from "./consts/sections";

export default function App() {
  return (
    <div>
      <div className="flex flex-col">
        <Container>
          <header className="py-6">
            <h1 className="text-2xl">Laura Alves</h1>
          </header>
        </Container>

        <main>
          <Container>
            <Presentation />
          </Container>

          <section id={sections.ContactMe} className="bg-white">
            <Container>
              <ContactMe />
            </Container>
          </section>
        </main>

        <div className="bg-white">
          <Container>
            <footer className="border-t border-slate-200">
              <div className="px-5 py-14 text-center text-sm">
                © {new Date().getFullYear()} Todos os direitos reservados
              </div>
            </footer>
          </Container>
        </div>
      </div>
    </div>
  );
}
