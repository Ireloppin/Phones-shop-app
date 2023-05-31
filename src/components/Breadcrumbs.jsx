import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname.split("/")[1];

  return (
    <Section>
      <Div>
        <Link to="/">Home</Link> &gt;
        <Span>
          <Link key={crumbs} to={currentLink}>
            {crumbs}
          </Link>
        </Span>
      </Div>
    </Section>
  );
};

export default Breadcrumbs;

const Section = styled.section``;

const Div = styled.div`
  display: flex;
`;

const Span = styled.span`
  color: green;
  margin-left: 10px;
`;
