import React from 'react';
import CourseLanding from '../../components/CourseLanding/CourseLanding';
import BaseLayout from '../../components/BaseLayout/BaseLayout';

const CourseLandingPage: React.FC = () => {
  return (
    <>
      <BaseLayout>
      <CourseLanding />
      </BaseLayout >
    </>
  );
};

export default CourseLandingPage;
