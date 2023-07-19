import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { items } from "../model/types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "../component/ItemCard";

interface OwnProps {
  log: boolean;
}

const ShoppingList: React.FC<OwnProps> = ({ log }) => {
  const [list, setList] = useState<items[]>([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQ = query.get("q") || "";
    console.log(searchQ);
    let url = `http://localhost:3004/products?q=${searchQ}`;
    let res = await fetch(url);
    let data = await res.json();

    setList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {list?.map((item) => (
            <Col key={item.id} lg={3}>
              <ItemCard item={item} log={log} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingList;
