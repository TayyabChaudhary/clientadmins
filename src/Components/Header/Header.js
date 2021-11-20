import React from 'react'
import './Header.css'
import BellImage from '../../dist/asset/images/Notification.png'
import SettingImage from '../../dist/asset/images/Setting.png'
import ProfileImage from '../../dist/asset/images/user.png'
import SearchImage from '../../dist/asset/images/Search.png'
import FilterImage from '../../dist/asset/images/Filter 2.png'
export default function Header() {
    return (
        <div>
            <div>
                <div className="flex justify-evenly mt-8 items-center">
                    <div className="logo">
                        <h3 className="font-bold text-lg">
                            Logo Here
                        </h3>
                    </div>
                    <div>
                        <div className="names">
                            <div className="block">
                                <h4 className="text-gray-400">
                                    Welcome
                                </h4>
                                <h2 className="_apap font-bold">
                                    Welcome Mr. John Smith
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="search_box">
                            <form className="relative">
                                <img src={SearchImage} className="absolute z-20 ml-4 mt-5" />
                                <input type="text" name="search" id="search" autocomplete="search" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-2 pl-12 outline-none w-52 shadow-sm sm:text-sm relative border-gray-300 rounded-md iidodo" placeholder="Search here " />
                                <button className="_APAPAP text-white flex items-center rounded-md absolute right-4 top-4">
                                    <img src={FilterImage} className="mr-2" />
                                    Filters
                                </button>
                            </form>
                        </div>
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
            </div>
        </div>
    )
}
