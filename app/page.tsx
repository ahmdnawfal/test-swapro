import Footer from '@/components/home/footer';
import SectionAbout from '@/components/home/section-about';
import SectionBookNow from '@/components/home/section-book-now';
import SectionCustomers from '@/components/home/section-customers';
import SectionGallery from '@/components/home/section-gallery';
import SectionMain from '@/components/home/section-main';
import SectionVarious from '@/components/home/section-various';
import SectionVillaStudio from '@/components/home/section-villa-studio';
import MainNavbar from '@/components/main-navbar';

export default async function Home() {
  return (
    <main className='overflow-x-hidden'>
      <MainNavbar />
      <section id='main'>
        <SectionMain />
      </section>
      <section id='about'>
        <SectionAbout />
      </section>
      <section id='villa'>
        <SectionVillaStudio />
      </section>
      <section id='various'>
        <SectionVarious />
      </section>
      <section id='customer'>
        <SectionCustomers />
      </section>
      <section id='gallery'>
        <SectionGallery />
      </section>
      <section id='book'>
        <SectionBookNow />
      </section>
      <footer id='contact'>
        <Footer />
      </footer>
    </main>
  );
}
