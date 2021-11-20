import React from 'react'
import './DetailsView.css'
import Header from '../Header/Header'
import HomeImage from '../../dist/asset/images/Home.png'
import ProfileImage from '../../dist/asset/images/Profile.png'
import ChartImage from '../../dist/asset/images/chart (2).png'
import ChartTwoImage from '../../dist/asset/images/Group 5.png'
import ChartThreeImage from '../../dist/asset/images/Chart.png'
import EditImage from '../../dist/asset/images/Edit.png'
import ArrowImage from '../../dist/asset/images/ArrowRight.png'
import MasterCardImage from '../../dist/asset/images/mastercard-2.png'
import ThreeImage from '../../dist/asset/images/image 3.png'
export default function DetailsView() {
    const DetailEditView = `
    <!-- modal div -->
    <div class="mt-0" x-data="{ open: false }">
        <!-- Button (blue), duh! -->
        <div className="w-20 h-8 rounded-md bg-none mt-2" @click="open = true">Edit</div>
        <!-- Dialog (full screen) -->
        <div class="absolute z-50 top-0 left-0 w-full h-full" x-show="open"  style="background-color: rgba(0,0,0,.5);" x-show="open"  >
            <!-- A basic modal dialog with title, body and one button to close -->
            <div class="h-auto relative top-10 w-full p-4 mx-2 z-30 text-left bg-white rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0 " @click.away="open = false" style="margin: auto">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="flex justify-between">
                    <h3 class="text-2xl pb-4 font-medium leading-6 text-gray-900">
                    Add New Entry
                    </h3>
                    <div class="bg-red-700 w-5 h-5 flex justify-center items-center rounded-sm cursor-pointer" @click="open = false">
                    <h1 class="text-white"> X </h1>
                    </div>
                    </div>
                    <div class="flex">
                    <div class="mt-4">
                    <form className="relative">
                    <label for="first-name" class="block text-sm text-gray-700 font-bold">Contact FirstName</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="*******" />
                    <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">Company Name</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                </form>
                    </div>
                    <div class="mt-4 pl-6">
                    <form className="relative">
                    <label for="first-name" class="block text-sm text-gray-700 font-bold">Contact LastName</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="*******" />
                    <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">Amount ($)</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                </form>
                    </div>
                    </div>
                    <div class="flex">
                    <div class="mt-4">
                    <form className="relative">
                    <label for="first-name" class="block text-sm text-gray-700 font-bold">Payment Method</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Via debit Card" />
                   
                </form>
                    </div>
                    </div>
                    <div>
                    <div class="mt-4">
                    <form className="relative">
                    <label for="first-name" class="block text-sm text-gray-700 font-bold">Description</label>
                    <textarea class="resize-none w-full border rounded-md mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 sm:text-sm border-gray-300 pl-4 h-32"></textarea>
                   
                </form>
                    </div>
                    </div>
                </div>
                <!-- One big close button.  --->
                <div class="mt-5 sm:mt-6 flex">
                    <span class="flex w-40 rounded-md shadow-sm">
                        <button class="inline-flex text-sm items-center justify-center w-40 px-4 py-2 text-white bg-black rounded hover:bg-blue-700">
                        Save
                        </button>
                    </span>
                    <span class="flex w-40 rounded-md shadow-sm pl-3">
                    <button @click="open = false" class="inline-flex text-sm items-center justify-center w-40 px-4 py-2 text-black bg-gray-300 rounded hover:bg-blue-700">
                    Close
                    </button>
                </span>
                </div>
            </div>
        </div>
    </div>
    `;
    const DeleteView = `
    <!-- modal div -->
    <div class="mt-0" x-data="{ open: false }">
        <!-- Button (blue), duh! -->
        <div className="w-20 h-8 rounded-md bg-none mt-2" @click="open = true">Delete</div>
        <!-- Dialog (full screen) -->
        <div class="absolute z-50 top-0 left-0 w-full h-full" x-show="open"  style="background-color: rgba(0,0,0,.5);" x-show="open"  >
            <!-- A basic modal dialog with title, body and one button to close -->
            <div class="h-auto relative top-40 w-full p-4 mx-2 z-30 text-left bg-white rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0 " @click.away="open = false" style="margin: auto">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="flex justify-between">
                    <h3 class="text-2xl pb-4 font-medium leading-6 text-gray-900">
                    Confirm Delete
                    </h3>
                    <div class="bg-red-700 w-5 h-5 flex justify-center items-center rounded-sm cursor-pointer" @click="open = false">
                    <h1 class="text-white"> X </h1>
                    </div>
                   

                  
                    </div>
                    <p class="text-black text-sm pt-4">
                        Are you sure you want to delete this item?
                    </p>
                </div>
                <!-- One big close button.  --->
                <div class="mt-5 sm:mt-6 flex">
                    <span class="flex w-40 rounded-md shadow-sm">
                        <button class="inline-flex text-sm items-center justify-center w-40 px-4 py-2 text-white bg-red-700 rounded hover:bg-red-700">
                        Confirm
                        </button>
                    </span>
                    <span class="flex w-40 rounded-md shadow-sm pl-3">
                    <button @click="open = false" class="inline-flex text-sm items-center justify-center w-40 px-4 py-2 text-black bg-gray-300 rounded hover:bg-blue-700">
                    Close
                    </button>
                </span>
                </div>
            </div>
        </div>
    </div>
    `;
    return (
        <div>
            <div className="_pp_aaa min-h-screen">
                <header className="pt-2">
                    <Header />
                </header>
                <div>
                    <div className="flex p-6 keieieo">
                        <div className="">
                            <div className="flex flex-col">
                                <div>
                                    <img src={HomeImage} className="mb-8 mt-12" />
                                </div>
                                <div>
                                    <img src={ProfileImage} className="mb-8" />
                                </div>
                                <div>
                                    <img src={ChartImage} className="mb-8" />
                                </div>
                                <div>
                                    <img src={ChartTwoImage} className="mb-8" />
                                </div>
                                <div>
                                    <img src={ChartThreeImage} className="mb-8" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-md shadow-sm p-8 oaiai bg-white ml-7">
                            <div className="flex justify-between dpdpdp lg:flex md:block">
                                <div className="">
                                    <div className="flex">
                                        <h1 className="text-lg font-bold flex items-center">
                                            <img src={ArrowImage} className="w-2 h-2 mr-2" />
                                            Sale Details
                                        </h1>
                                    </div>
                                    <div className="pt-4">
                                        <h1 className="text-lg font-bold">
                                            Title
                                        </h1>
                                        <p className="text-gray-300">
                                            Sales Title goes here
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h1 className="text-lg font-bold">
                                            Description
                                        </h1>
                                        <p className="text-gray-300 mt-2">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br /> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <br /> voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet <br /> clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit <br /> amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h1 className="text-xl font-bold">
                                            Gallery
                                        </h1>
                                    </div>
                                    <div className="flex pt-4">
                                        <div>
                                            <img src={ThreeImage} className="w-4/5 olsooss" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-12 jdiidi bg-black w-80 rounded-md">
                                        <div>
                                            <h1 className="text-white font-bold">
                                                Contact Name
                                            </h1>
                                            <p className="text-gray-400 mt-1">
                                                Mr. Joseph Fernandez
                                            </p>
                                            <h1 className="text-white font-bold mt-3">
                                                Date
                                            </h1>
                                            <p className="text-gray-400 mt-1">
                                                3, September, 2021
                                            </p>
                                            <h1 className="text-white font-bold mt-3">
                                                Amount ($)
                                            </h1>
                                            <p style={{ color: '#F78F1E' }} className="mt-1">
                                                $ 450
                                            </p>
                                            <h1 className="text-white font-bold mt-3">
                                                Payment Method
                                            </h1>
                                            <div className="flex mt-3 items-center">
                                                <img src={MasterCardImage} className="w-4 h-4" />
                                                <p className="text-gray-400 ml-3">
                                                    Mastercard <br />
                                                    **** **** **** 1234
                                                </p>
                                            </div>
                                            <h1 className="text-white font-bold mt-3">
                                                Actions
                                            </h1>
                                            <div className="flex">
                                            <div className="w-20 h-8 cursor-pointer rounded-md flex justify-center items-center bg-white mt-2 z-40" dangerouslySetInnerHTML={{ __html: DetailEditView }}></div>
                                            <div className="w-20 h-8 cursor-pointer rounded-md flex justify-center items-center bg-red-700 text-white ml-3 mt-2 z-40" dangerouslySetInnerHTML={{ __html: DeleteView }}></div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
