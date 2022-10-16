import React from 'react'
import anflixImg from '../assets/anflixImage.PNG'
import covidScreens from '../assets/covidScreens.jpg'
import p2p from '../assets/p2p.jpg'
import edinfinity from '../assets/edinfinity.png'



function Experience(){

    const [showPopUp, setShowPopUp] = React.useState(false);
    const [ModalTitle, setModalTitle] = React.useState("");
    const [ModalInfo, setModalInfo] = React.useState("");
  
  
  
  async function handleClick(title, info){
      setShowPopUp(true)
      setModalTitle(title)
      setModalInfo(info)
      }
  
      // To be completed
  async function handleClear(title, info){
      setShowPopUp(false)
      setModalTitle("")
      setModalInfo("")
      }
return (
    <div name = 'exp' className='w-full h-screen bg-[#070707] text-gray-300 inline-flex' style={{display:"inline-block"}}>
            <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full px-8 grid grid-cols-2 gap-8'>
                  <div className='pb-8'>
                      <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Experience</p>
                  </div>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 ">

                  {/* Project 1 */}
                  <div style={{backgroundImage:`url(${p2p})`,backgroundSize: 'cover'}} className='grid gap-4 object-contain content-div rounded-lg'>
                      {/* Card */}
                      <div className='shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto'>
                          {/* Hover effect */}
                          <div className='opacity-0 group-hover:opacity-100 text-center'>
                              <span className='text-2xl font-bold text-white tracking-wider '>
                                    Impactp2p
                              </span>
                              <div className='pt-8 text-center'>
                                    <a href='https://www.impactp2p.com/' target="_blank">
                                      <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                      </button>
                                  </a>
                                  <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold m-5'
                                    onClick={() => handleClick("Impactp2p", ["Impactp2p is a peer to peer lending platform connecting individual borrowers to lenders digitally.",""] )}
                                   >
                                        More info
                                  </button>
                                  <div class="px-6 pt-4 pb-2 text-center">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#peer2peer</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#finance</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#portfolio</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
                  {/* Project 2 */}
                  <div style={{backgroundImage:`url(${edinfinity})`,backgroundSize: 'cover'}} className='grid gap-4 object-contain rounded-lg'>
                      {/* Card */}
                      <div className='shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>
                          {/* Hover effect */}
                          <div className='opacity-0 group-hover:opacity-100 text-center'>
                              <span className='text-2xl font-bold text-white tracking-wider'>
                              EDInfinity
                              </span>
                              <div className='pt-8 text-center'>
                                   <a href='https://www.financepeer.com/edinfinity/' target="_blank">
                                      <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold'>
                                            Demo
                                      </button>
                                  </a>
                                  <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold m-5'
                                    onClick={() => handleClick("EDInfinity", ["Financepeer is a platform that helps parents/students pay their fees in easy installments starting from 0% for a duration of up to 24 months.","EDInfinity is the One stop solution for all your Learning."])}
                                   >
                                        More info
                                  </button>
                                  <div class="px-6 pt-4 pb-2 text-center">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#edtech</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#quizes</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#edcontent</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>

          </div>
                     {showPopUp ? (
                    <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {ModalTitle}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => handleClear()}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                               {/* {ModalInfo}  */}
                                {ModalInfo.map(pt => {
                                    return (
                                    <div>
                                        <p>&#x2022; {pt}</p>
                                    </div>
                                    );
                                })}
                            </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleClear()}
                            >
                                Close
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
      </div>
)

}


export default Experience