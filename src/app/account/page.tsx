import Image from 'next/image';
import { Josefin_Sans } from "next/font/google";

// Load the Josefin Sans font at the module scope
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});
export default function MyAccount() {
    return (
      <div className="bg-gray-50 min-h-screen">
     
      {/* Rectangle Section */}
      <div className="absolute mt-[1px] left-0 w-full h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[287px] mt-[67px] font-"
          style={{
            fontSize: '36px',
            lineHeight: '25.78px',
          }}
        >
          My Account
        </h1>
        <p
          className="mt-5 ml-[286px]"
          style={{
            fontFamily: 'Josefin Sans',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '14.4px',
            color: 'black',
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. My Account</span>
        </p>
        </div>
  
        {/* Main Section */}
        <main className="container mx-auto px-4 flex flex-col items-center ">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full mt-[300px]">
            <h2 className="text-[32px] font-[Josefin Sans] font-bold text-center text-gray-800">Login</h2>
            <p className="text-center font-[Lato] text-[#9096B2] text-sm mb-6">
              Please login using account details below.
            </p>
  
            {/* Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div className="text-left">
                <a href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
              >
                Sign In
              </button>
            </form>
  
            <p className="text-center text-gray-600 text-sm mt-6">
              Don't have an account?{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Create account
              </a>
            </p>
          </div>
  
          {/* Footer Logos */}
          <div className=" justify-center  mt-[90px]">
            <Image 
            src={"/images/image 1174.png"}
            alt='brands'
            width={800}
            height={1111}
            />
          </div>
        </main>
      </div>
    );
  }