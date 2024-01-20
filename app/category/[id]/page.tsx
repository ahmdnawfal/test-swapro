import SectionMainCategory from '@/components/category/section-main-category';
import SectionVillaCategory from '@/components/category/section-villa-category';
import Footer from '@/components/home/footer';
import SectionBookNow from '@/components/home/section-book-now';
import SectionCustomers from '@/components/home/section-customers';
import SectionGallery from '@/components/home/section-gallery';
import MainNavbar from '@/components/main-navbar';
import { GET } from '@/config/api';

type QueryParams = {
  categoryId: string;
};

const getVilla = async (params: QueryParams) => {
  const response = await GET('http://localhost:3000/api/villa', params);
  if (response.message === 'SUCCESS') {
    return response;
  } else {
    throw new Error(response.message);
  }
};

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { sort: string };
}) => {
  const id = params.id;
  const queryParams = {
    categoryId: id,
    sort: searchParams.sort,
  };

  const villa = await getVilla(queryParams);

  return (
    <main>
      <MainNavbar />
      <section id='main'>
        <SectionMainCategory />
      </section>
      <section id='villa'>
        <SectionVillaCategory searchParams={searchParams} data={villa?.data} />
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
};

export default Page;
