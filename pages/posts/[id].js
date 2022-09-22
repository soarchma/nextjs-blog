import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths(context) {
  console.log('getStaticPaths - context:', context);
  const paths = getAllPostIds();
  console.log('getStaticPaths - paths:', paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log('getStaticProps - context:', context);
  const postData = await getPostData(context.params.id);
  // console.log('getStaticProps - postData:', postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}