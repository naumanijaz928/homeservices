import React from "react";
type ServiceProps = {
  params: {
    serviceType :string
  }
};
const Service = ({ params }: ServiceProps) => {
  return <div>child Service {params.serviceType}</div>;
};

export default Service;
