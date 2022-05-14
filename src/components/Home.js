import React from "react";
import styled from "styled-components";

import Section from "./Section";
import { images } from "../images";

export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={images.model_s}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={images.model_3}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={images.model_y}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={images.model_x}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back Gurantee"
        backgroundImg={images.solar_panel}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roof"
        description="Solar Roof Costs less than a New Roof plus Solar Panel"
        backgroundImg={images.solar_roof}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={images.accessories}
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
