import React from 'react'
import './CrudOverView.css'
import 'alpinejs'
import BellImage from '../../dist/asset/images/Notification.png'
import SettingImage from '../../dist/asset/images/Setting.png'
import HomeImage from '../../dist/asset/images/Home.png'
import ProfileImage from '../../dist/asset/images/user.png'
import ProfileImages from '../../dist/asset/images/Profile.png'
import ChartImage from '../../dist/asset/images/chart (2).png'
import ChartTwoImage from '../../dist/asset/images/Group 5.png'
import ChartThreeImage from '../../dist/asset/images/Chart.png'
import SearchImage from '../../dist/asset/images/Search.png'
import ArroweImage from '../../dist/asset/images/arroe.png'
import ArrowDrownImage from '../../dist/asset/images/Arrow - Down 2.png'
import PlusImage from '../../dist/asset/images/Plus.png'
import MasterCardImage from '../../dist/asset/images/mastercard-2.png'
import MoreImage from '../../dist/asset/images/more.png'
import ArrowRightImage from '../../dist/asset/images/Arrow - Right 2 (1).png'
import ArrowLeftImage from '../../dist/asset/images/Arrow - Right 2.png'
export default function CrudOverView() {

    return (
        <div>
            <div className="_paoao min-h-screen">
                <nav className="pt-4 p-7">
                    <div className="flex justify-between items-center lg:flex md:block">
                        <div>
                            <h1 className="text-2xl font-bold text-black">
                                Logo Here
                            </h1>
                        </div>
                        <div>
                            <div className="flex justify-evenly w-40 items-center">
                                <div>
                                    <div className="bell_icon relative">
                                        <img src={BellImage} />
                                        <div className="w-4 h-4 flex justify-center items-center rounded-full ksdjfkfj absolute">
                                            <span className="text-sm text-white">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="cog_icon">
                                        <img src={SettingImage} />
                                    </div>
                                </div>
                                <div>
                                    <div className="profile_image">
                                        <img src={ProfileImage} className="w-10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}
                <div>
                    <div className="flex p-6">
                        <div className="">
                            <div className="flex flex-col">
                                <div>
                                    <img src={HomeImage} className="mb-8 mt-12" />
                                </div>
                                <div>
                                    <img src={ProfileImages} className="mb-8" />
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
                            <div className="flex justify-between ododoodo">
                                <div className="flex kowowo items-center">
                                    <div>
                                        <h1 className="font-bold text-2xl">
                                            Total Sales
                                        </h1>
                                    </div>
                                    <div className="pl-4">
                                        <form className="relative">
                                            <img src={SearchImage} className="absolute z-20 w-4 h-4 ml-4 mt-4" />
                                            <input type="text" name="search" id="search" autocomplete="search" className="pt-3 focus:ring-indigo-500 focus:border-indigo-500 p-2 pl-12 outline-none w-80 sm:text-sm relative border-gray-300 rounded-md" placeholder="Search here " />
                                        </form>
                                    </div>
                                </div>
                                <div className="flex items-center idodo">
                                    <div className="pr-3">
                                        <img src={ArroweImage} />
                                    </div>
                                    <div className="pr-3">
                                        <div className="w-32 bg-black p-3 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h2 className="text-white">
                                                        Sort By
                                                    </h2>
                                                </div>
                                                <div>
                                                    <img src={ArrowDrownImage} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-40 bg-black p-3 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <img src={PlusImage} />
                                                </div>
                                                <div>
                                                    <h2 className="text-white">
                                                        Add New Entry
                                                    </h2>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Here */}
                            <section class="py-1 bg-blueGray-50 mt-9">
                                <div class="w-full xl:mb-0 px-4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full  rounded ">
                                        <div class="block w-full overflow-x-auto">
                                            <table class="items-center bg-transparent w-full border-collapse ">
                                                <thead>
                                                    <tr>
                                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                            Date
                                                        </th>
                                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                            Contact name
                                                        </th>
                                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                            Company
                                                        </th>
                                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                            Description
                                                        </th>
                                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                            Amout($)
                                                        </th>
                                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                            Payment Method
                                                        </th>

                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className="border-b">
                                                        <th class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs text-gray-300 whitespace-nowrap p-4 text-left ">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle font-medium font-sans border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>

                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <th class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <th class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-gray-300 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 text-gray-300 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <th class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <th class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <th class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                            Sep 2
                                                        </th>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 font-medium font-sans border-r-0 text-xs whitespace-nowrap p-4">
                                                            Mr. Joseph Fernandez
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle text-gray-300 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            Alpha Medical Inc.
                                                        </td>
                                                        <td class="border-t-0 px-6 text-gray-300 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            The basic description tagline goes here
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            $ 450
                                                        </td>
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{ color: '#F78F1E' }}>
                                                            <div className="flex">
                                                                <div>
                                                                    <img src={MasterCardImage} className="w-4 h-4" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-gray-300 pl-3">
                                                                        **** **** **** 1234
                                                                    </h3>
                                                                </div>
                                                                <div className="pl-4">
                                                                    <img src={MoreImage} className="w-4 h-4" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>


                                            </table>
                                            <div className="flex justify-between pt-6">
                                                <div className="flex flex-1 justify-between ooososo">
                                                    <div>
                                                        <h2 className="font-bold">
                                                            07 out of 57 Results
                                                        </h2>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-6 h-6 rounded-md bg-black ml-2 flex justify-center items-center">
                                                            <img src={ArrowLeftImage} />
                                                        </div>
                                                        <div className="w-6 h-6 rounded-md bg-gray-400 ml-2 flex justify-center items-center">
                                                            <h2 className="text-sm text-white">
                                                                1
                                                            </h2>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-md bg-black ml-2 flex justify-center items-center">
                                                            <h2 className="text-sm text-white">
                                                                2
                                                            </h2>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-md bg-gray-400 ml-2 flex justify-center items-center">
                                                            <h2 className="text-sm text-white">
                                                                3
                                                            </h2>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-md bg-black ml-2 flex justify-center items-center">
                                                            <img src={ArrowRightImage} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
