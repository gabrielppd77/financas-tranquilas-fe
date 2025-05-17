import Container from "./components/container";

import Presentation from "./components/presentation";
import ContactMe from "./components/contact-me";
import sections from "./consts/sections";
import ListProblems from "./components/list-problems";
import ListCompetence from "./components/list-competence";
import CarouselImages from "./components/carousel-images";
import Instructions from "./components/instructions";
import Quote from "./components/quote";
import Pricing from "./components/pricing";

export default function App() {
  return (
    <div>
      <div className="flex flex-col">
        <Container>
          <header className="border-b border-slate-200 py-6">
            <h1 className="text-[24px] font-medium text-gray-800">
              Laura Alves
            </h1>
          </header>
        </Container>

        <main className="mt-8">
          <Container>
            <Presentation />
          </Container>

          <section className="bg-white">
            <Container>
              <div className="flex flex-col justify-between gap-8 bg-white px-8 py-20 lg:flex-row">
                <ListProblems />
                <ListCompetence />
              </div>
            </Container>
          </section>

          <section className="bg-white">
            <Container>
              <CarouselImages />
            </Container>
          </section>

          <section className="bg-white">
            <Container>
              <Instructions />
            </Container>
          </section>

          <section className="bg-[#222]">
            <Container>
              <Quote />
            </Container>
          </section>

          <section>
            <Container>
              <Pricing />
            </Container>
          </section>

          <section id={sections.ContactMe} className="bg-white">
            <Container>
              <ContactMe />
            </Container>
          </section>
        </main>

        <div className="bg-white">
          <Container>
            <footer className="border-t border-slate-200">
              <div className="px-5 py-14 text-center text-sm text-gray-700">
                © {new Date().getFullYear()} Todos os direitos reservados
              </div>
            </footer>
          </Container>
        </div>
      </div>
    </div>
  );
}
