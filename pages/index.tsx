import Layout from '@/components/Layout/Layout';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { GetServerSideProps } from 'next';

type Props = {};

export default function Page({}: Props) {

  return (
    <Layout title={'首页'}>
      <>
        <Header />
        <Footer />
      </>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context)
  return {
    props: {},
  };
};
