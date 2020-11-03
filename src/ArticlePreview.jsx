import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const ArticlePreview = ({ title, body, id }) => {
  return (
    <Col xs="12" md="6" className="py-1">
      <Card body outline color="success">
        <CardTitle>{title}</CardTitle>
        <CardText>{body}</CardText>
        <Button tag={Link} to={`/article/${id}`} color="success">
          Go somewhere
        </Button>
      </Card>
    </Col>
  );
};

export default ArticlePreview;
