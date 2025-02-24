import React from 'react'

const Form = ({ selectedOption }) => {
  return (
    <div>
       <div class="loadform">
   <div class="modal-body p-5 pt-0">
      <header class="book-heading">
      <h1 style={{color:'black',margin:20}}>Book a Trial</h1>
      <i class="fa-solid fa-xmark"></i>
   </header>
      <form class="bookclass" action="https://formspree.io/f/xjkbngll" method="post" >
        <div class="form-floating mb-3">
          <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Enter Name"
          style={{color: "black"}}
          name="name" required/>
          <label for="floatingInput"
         style={{color: "black"}}
          >Enter Name</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control rounded-3" id="floatingPassword" placeholder="Number"
          name="number" required/>
          <label for="floatingPassword"
          style={{color: "black"}}
          >Mobile No.</label>
        </div>
        {selectedOption.map((option, index) => (
              <input key={index} type="hidden" name={`selectedOption${index}`} value={option} />
            ))}
        <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Book</button>
        <small class="text-body-secondary">By clicking Book, you agree to the terms of use.</small>
        
      </form>
    </div>

</div> 
    </div>
  )
}

export default Form