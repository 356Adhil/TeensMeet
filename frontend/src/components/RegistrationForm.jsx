import React, { useState } from 'react';
import instance from '../axios';
import { toast } from "react-toastify";

function RegistrationForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');

  const containerStyles = {
    backgroundImage: "url('https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/register_bg_2.png')",
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newParticipant = {
      name: name,
      age: age,
      gender: gender,
      contact: contact,
    };
  
    instance
      .post("/", newParticipant)
      .then((response) => {
        console.log(response.data);
        toast.success("Registration Completed", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // Reset form fields
        setName("");
        setAge("");
        setGender("");
        setContact("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full flex justify-center bg-gray-900"
            style={containerStyles}
            >
            <h1 className='text-white font-black text-5xl mt-10 py-10 font-serif text-shadow-xl'>Teen's Meet</h1>
            </div>
          <div className="container mx-auto px-4 h-full pt-16">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                      Registration
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {/* <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Registration</small>
                    </div> */}
                    <form onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                        autoComplete='off'
                          type="text"
                          id='name'
                          name='name'
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="age"
                        >
                          Age
                        </label>
                        <input
                        autoComplete='off'
                          type="text"
                          id='age'
                          name='age'
                          value={age}
                          onChange={(event) => setAge(event.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="age"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="gender"
                        >
                          Gender
                        </label>
                        <input
                        autoComplete='off'
                          type="text"
                          id='gender'
                          name='gender'
                          value={gender}
                          onChange={(event) => setGender(event.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Gender"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="contact"
                        >
                          Contact
                        </label>
                        <input
                        autoComplete='off'
                          type="tel"
                          id='contact'
                          name='contact'
                          value={contact}
                          onChange={(event) => setContact(event.target.value)}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Contact"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  );
}

export default RegistrationForm;
