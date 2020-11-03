import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Col, Row, Spinner } from 'reactstrap';
import ArticlePreview from '../ArticlePreview';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Row>
      {loading ? (
        <Col className="text-center">
          <Spinner size="xl" color="warning" />
        </Col>
      ) : (
        posts.map((post) => {
          return (
            <ArticlePreview
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              key={post.id}
            />
          );
        })
      )}
    </Row>
  );
};

export default Home;
