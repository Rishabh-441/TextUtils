import React from "react";

export default function About(props) {
  return (
    <div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#006b92', color: props.mode === 'light' ? 'black' : 'white'}}>
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}}
            >
              Section 1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            Welcome to Text Utils, your go-to application for all things text-related! Whether you're a student, professional, or just someone who works with text regularly, our app is designed to make your life easier. With a variety of handy tools at your fingertips, you can streamline your text editing process and enhance your productivity like never before.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#006b92', color: props.mode === 'light' ? 'black' : 'white'}}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}}
            >
              Section 2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            From simple tasks like formatting and cleaning up messy text to more advanced operations like extracting keywords or summarizing content, Text Utils has got you covered. Our intuitive interface and comprehensive features cater to users of all levels, ensuring that anyone can harness the power of text manipulation effortlessly. Say goodbye to tedious manual editing and hello to a smarter, more efficient way of working with text.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={{backgroundColor: props.mode === 'light' ? 'white' : '#006b92', color: props.mode === 'light' ? 'black' : 'white'}}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}}
            >
              Section 3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            At Text Utils, we're committed to continually improving and expanding our suite of tools to meet the evolving needs of our users. Whether you're writing an essay, crafting a professional email, or analyzing large volumes of text data, our app empowers you to achieve your goals with precision and ease. Join the thousands of satisfied users who rely on Text Utils to revolutionize their text editing experience today!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
