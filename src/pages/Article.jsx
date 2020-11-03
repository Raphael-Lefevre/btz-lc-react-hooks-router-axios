import { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Jumbotron,
  Row,
  Spinner,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Article = (props) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
    )
      .then((res) => {
        setPost(res.data);

        return Axios.get(
          `https://jsonplaceholder.typicode.com/users/${res.data.userId}`
        );
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Jumbotron>
        <h1 className="display-3">{post.title}</h1>
        <p className="lead">{post.body}</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>{user.name}</CardTitle>
              <CardSubtitle>{user.email}</CardSubtitle>
              <CardText>
                <FontAwesomeIcon icon={faPhone} />
                phone : {user.phone}
              </CardText>
              <CardText>
                <FontAwesomeIcon icon={faBuilding} />
                company : {user.company.name}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Article;
