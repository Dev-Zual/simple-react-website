import React from 'react';

const Quistions = () => {
  return (
    <div className="w-3/4 mx-auto mt-7 mb-8">
      <h1 className="text-3xl text-red-400 text-center font-bold">
        This is quistions area
      </h1>
      <div className="mt-5">
        <div>
          <h3 className="text-xl font-semibold">1. How React Works?</h3>
          <p>
            <strong>Step 1:</strong> Fristly react create a virtual dom of our
            main dom. <br /> <strong>Step 2:</strong> Then when we change
            someting in our dom react compare our main dom with the virtual dom.
            <br />
            <strong>step 3:</strong>
            Then react find the difference main dom with virtual dom with a
            unipue key and tehn change it.
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">
            2. React props vs state difference?
          </h3>
          <div>
            <h3 className="text-xl font-semibold">props</h3>
            <p>
              <strong>1.</strong> Props are used to pass data from one component
              to another. <br />
              <strong>2. </strong>
              Props are immutable
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold">State</h3>
            <p>
              <strong>2. </strong>
              The state is a local data storage that is local to the component
              only and cannot be passed to other components. <br />
              <strong>2. </strong>
              State is mutable. <br />
              <strong>3. </strong>
              should not be accessed from child components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quistions;
