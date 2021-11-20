import React from 'react'
import Header from '../Header/Header'
import './UserSetting.css'
import HomeImage from '../../dist/asset/images/Home.png'
import ProfileImage from '../../dist/asset/images/Profile.png'
import ChartImage from '../../dist/asset/images/chart (2).png'
import ChartTwoImage from '../../dist/asset/images/Group 5.png'
import ChartThreeImage from '../../dist/asset/images/Chart.png'
import EditImage from '../../dist/asset/images/Edit.png'
import ArrowImage from '../../dist/asset/images/ArrowRight.png'
import Alpine from 'alpinejs'
import Helmet from 'react-helmet'
export default function UserSetting() {
    const DASHBOARDTITLE = 'CRUD User Setting'

    const Dialogindow = `
    <!-- modal div -->
    <div class="mt-0" x-data="{ open: false }">
        <!-- Button (blue), duh! -->
        <div class="px-4 py-2 rounded select-none no-outline focus:shadow-outline bg-none" @click="open = true"></div>
        <!-- Dialog (full screen) -->
        <div class="absolute z-50 top-0 left-0 w-full h-full" x-show="open"  >
            <!-- A basic modal dialog with title, body and one button to close -->
            <div class="h-auto lddddpp p-4 mx-2 z-30 text-left bg-white rounded shadow-xl md:max-w-xl md:p-6 lg:p-8 md:mx-0" @click.away="open = false" style="width: 600px;">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="flex justify-between">
                    <h3 class="text-2xl pb-4 font-medium leading-6 text-gray-900">
                    Change Password
                    </h3>
                    <div class="bg-red-700 w-5 h-5 flex justify-center items-center rounded-sm cursor-pointer" @click="open = false">
                    <h1 class="text-white"> X </h1>
                    </div>
                    </div>
                    <div class="mt-4">
                    <form className="relative">
                    <label for="first-name" class="block text-sm text-gray-700 font-bold">Change Password</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="*******" />
                    <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">Change Email</label>
                    <input type="password" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                </form>
                    </div>
                </div>
                <!-- One big close button.  --->
                <div class="mt-5 sm:mt-6 flex">
                    <span class="flex w-40 rounded-md shadow-sm">
                        <button class="inline-flex text-sm items-center justify-center w-40 px-4 py-2 text-white bg-black rounded hover:bg-blue-700">
                        Update
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
    `
    return (
        <div>
            <Helmet>
                <title>{DASHBOARDTITLE}</title>
            </Helmet>
            <div className="_paoa min-h-screen overflow-hidden">
                <header>
                    <Header />
                </header>
                <div>
                    <div className="flex p-6">
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
                            <div className="flex justify-around j_p_l_j_h_">
                                <div>
                                    <div>
                                        <h1 className="text-lg font-bold flex items-center">
                                            <img src={ArrowImage} className="w-2 h-2 mr-2" />
                                            User Settings
                                        </h1>
                                    </div>
                                    <div className="pt-4 ">
                                        <form className="relative">
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold">Change Password</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="*******" />
                                            <div className="ososss">
                                            <div className="absolute _oapapa z-40" dangerouslySetInnerHTML={{ __html: Dialogindow }}></div>

                                                </div>
                                            <label for="first-name" class="block text-sm text-gray-700 font-bold mt-4">Change Email</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="demouser@demo.com" />
                                            <img src={EditImage} className="absolute _oapap z-40 cursor-pointer" />
                                        </form>
                                    </div>
                                </div>


                                <div>
                                    <div className="_0ee">
                                        <h1 className="text-lg font-bold ">
                                            Profile Details
                                        </h1>
                                    </div>

                                    <div className="pt-4 flex kdooddpaoa">
                                        <form>
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold">First Name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold mt-4">Contact Number</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                        </form>
                                        <form className="ml-8 idod">
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold">Last name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                            <label htmlFor="first-name" class="block text-sm text-gray-700 font-bold mt-4">Email Address</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 odofofo focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm bg-gray-100 outline-none p-2 w-60 sm:text-sm border-gray-300 rounded-md pl-4 h-10" placeholder="Admin" />
                                        </form>
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
