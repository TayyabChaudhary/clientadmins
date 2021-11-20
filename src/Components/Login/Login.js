import React from 'react'
import './Login.css';
export default function Login() {
    return (
        
        <div>
            <div className="_p_a_as_d min-h-screen">
                <div className="flex justify-center items-center min-h-screen shadow-md rounded _pao_aoao">
                    <div className="_iu_aia bg-white">
                        <h1 className="Oaiao font-bold">
                            Welcome Back
                        </h1>
                        <p className="pt-1">Login to your account</p>
                        <div className="pt-4">
                            <div>
                                <label for="price" class="block text-sm font-medium text-gray-700">Email</label>
                                <div class="mt-3 relative rounded-md shadow-sm">
                                    <input type="email" name="email" id="email" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md  p-3 bg-gray-100" placeholder="Your email address" />
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                <div class="mt-3 relative rounded-md shadow-sm">
                                    <input type="password" name="password" id="password" class="focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md  p-3 bg-gray-100" placeholder="Your email address" />
                                </div>
                            </div>

                        </div>
                        <div
                            class="
                            mt-3
    relative
    inline-block
    w-12
    mr-2
    align-middle
    select-none
    transition
    duration-200
    ease-in
  "
                        >
                            <input
                                type="checkbox"
                                name="toggle"
                                id="toggle"
                                class="
      toggle-checkbox
      absolute
      block
      w-6
      h-6
      rounded-full
      bg-white
      border-4
      appearance-none
      cursor-pointer
    "
                            />
                            <label
                                for="toggle"
                                class="
      toggle-label
      block
      overflow-hidden
      h-6
      rounded-full
      bg-gray-300
      cursor-pointer
    "
                            ></label>
                        </div>
                        <label for="toggle" class="text-xs text-gray-700">Rember me.</label>
                        <div className="pt-7">
                            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
