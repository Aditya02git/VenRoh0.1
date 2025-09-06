import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import {
  Bell,
  Home,
  LogOut,
  User,
  Users,
  Search,
  MessageSquareMore,
  Wallet,
  Menu,
  X,
} from "lucide-react";
import {
  MdHomeRepairService,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { LuMessageSquareWarning } from "react-icons/lu";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/user");
      return response.data;
    },
  });

  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => axiosInstance.get("/notifications"),
    enabled: !!authUser,
  });

  const { data: connectionRequests } = useQuery({
    queryKey: ["connectionRequests"],
    queryFn: async () => axiosInstance.get("/connections/requests"),
    enabled: !!authUser,
  });

  const unreadNotificationCount = notifications?.data?.filter(
    (notif) => !notif.read
  ).length;
  const unreadConnectionRequestsCount = connectionRequests?.data?.length;

  const [sticky, setSticky] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setSticky(currentScroll <= 0 || currentScroll < lastScrollTop);
      setLastScrollTop(currentScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const navItemMotion = {
    whileHover: { scale: 1.1, y: -2 },
    transition: { type: "spring", stiffness: 250 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`bg-[rgba(231,231,231,0.95)] shadow-[1px_1px_20px_rgba(0,0,0,0.5)] sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        sticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex flex-row gap-2 sm:gap-3"
              onClick={closeMobileMenu}
            >
              <img
                className="h-6 sm:h-8 rounded"
                src="navbar_logo.jpg"
                alt="N/A"
              />
              <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-bold">
                VenRoh
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            {authUser ? (
              <>
                <motion.div {...navItemMotion}>
                  <Link
                    to={"/"}
                    className="text-neutral flex flex-col items-center"
                  >
                    <Home size={20} className="text-white" />
                    <span className="text-xs text-white">Home</span>
                  </Link>
                </motion.div>

                <motion.div {...navItemMotion}>
                  <Link
                    to="/search"
                    className="text-neutral flex flex-col items-center"
                  >
                    <Search size={20} className="text-white" />
                    <span className="text-xs text-white">Search</span>
                  </Link>
                </motion.div>

                <motion.div {...navItemMotion}>
                  <Link
                    to="/message"
                    className="text-neutral flex flex-col items-center"
                  >
                    <MessageSquareMore size={20} className="text-white" />
                    <span className="text-xs text-white">Message</span>
                  </Link>
                </motion.div>

                <motion.div {...navItemMotion}>
                  <Link
                    to="/network"
                    className="text-neutral flex flex-col items-center relative"
                  >
                    <Users size={20} className="text-white" />
                    <span className="text-xs text-white">Connections</span>
                    {unreadConnectionRequestsCount > 0 && (
                      <span className="absolute -top-1 right-4 bg-blue-500 text-white text-xs rounded-full size-4 flex items-center justify-center">
                        {unreadConnectionRequestsCount}
                      </span>
                    )}
                  </Link>
                </motion.div>

                <motion.div {...navItemMotion}>
                  <Link
                    to="/notifications"
                    className="text-neutral flex flex-col items-center relative"
                  >
                    <Bell size={20} className="text-white" />
                    <span className="text-xs text-white">Notifications</span>
                    {unreadNotificationCount > 0 && (
                      <span className="absolute -top-1 right-4 bg-blue-500 text-white text-xs rounded-full size-4 flex items-center justify-center">
                        {unreadNotificationCount}
                      </span>
                    )}
                  </Link>
                </motion.div>

                <motion.div {...navItemMotion}>
                  <Link
                    to={`/profile/${authUser.username}`}
                    className="text-neutral flex flex-col items-center"
                  >
                    <User size={20} className="text-white" />
                    <span className="text-xs text-white">Profile</span>
                  </Link>
                </motion.div>

                <motion.div {...navItemMotion}>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 text-white bg-[radial-gradient(circle,_rgba(63,_94,_251,_1)_0%,_rgba(252,_70,_107,_1)_100%)] p-2 rounded-md border-2 border-blue-700 transition-all duration-300 hover:text-gray-400"
                    >
                      Credits
                      <Wallet size={18} />
                      <span className="font-bold">{authUser.credit}</span>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-[#F5F5DC] hover:bg-[#d0d0ba] rounded-box z-10 w-52 p-2 shadow-sm"
                    >
                      <Link to={"/myplans"}>My Plans</Link>
                    </ul>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <div className="flex flex-row gap-8 lg:gap-[60px]">
                  <motion.div {...navItemMotion}>
                    <Link to="/landing" className="flex flex-col items-center">
                      <Home size={20} color="black" />
                      <span className="text-xs text-black">Home</span>
                    </Link>
                  </motion.div>
                  <motion.div {...navItemMotion}>
                    <Link to="/about" className="flex flex-col items-center">
                      <LuMessageSquareWarning size={20} color="black" />
                      <span className="text-xs text-black">About</span>
                    </Link>
                  </motion.div>
                  <motion.div {...navItemMotion}>
                    <Link to="/service" className="flex flex-col items-center">
                      <MdHomeRepairService size={20} color="black" />
                      <span className="text-xs text-black">Services</span>
                    </Link>
                  </motion.div>
                </div>
                <div className="w-px h-10 bg-gray-300"></div>
                <motion.div {...navItemMotion}>
                  <Link to="/login">
                    <button className="bg-black text-white px-3 lg:px-4 py-2 rounded-md font-semibold transition-all duration-200 text-sm">
                      Log In
                    </button>
                  </Link>
                </motion.div>
                <motion.div {...navItemMotion}>
                  <Link
                    to="/signup"
                    className="btn btn-ghost text-black border-black text-sm px-3"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-black p-2 rounded-md hover:bg-gray-200 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden border-t border-gray-300"
            >
              <div className="py-4 space-y-4">
                {authUser ? (
                  <>
                    {/* Credits Section - Mobile */}
                    <div className="flex items-center justify-between p-3 bg-[radial-gradient(circle,_rgba(63,_94,_251,_1)_0%,_rgba(252,_70,_107,_1)_100%)] rounded-md mx-2">
                      <div className="flex items-center gap-2">
                        <Wallet size={20} className="text-white" />
                        <span className="text-white font-semibold">
                          Credits: {authUser.credit}
                        </span>
                      </div>
                      <Link
                        to="/myplans"
                        onClick={closeMobileMenu}
                        className="text-white text-sm underline"
                      >
                        My Plans
                      </Link>
                    </div>

                    {/* Navigation Links - Mobile */}
                    <div className="grid grid-cols-3 gap-4 px-2">
                      <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <Home size={24} className="text-gray-700" />
                        <span className="text-xs mt-1 text-gray-700">Home</span>
                      </Link>

                      <Link
                        to="/search"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <Search size={24} className="text-gray-700" />
                        <span className="text-xs mt-1 text-gray-700">
                          Search
                        </span>
                      </Link>

                      <Link
                        to="/message"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <MessageSquareMore
                          size={24}
                          className="text-gray-700"
                        />
                        <span className="text-xs mt-1 text-gray-700">
                          Messages
                        </span>
                      </Link>

                      <Link
                        to="/network"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 relative"
                      >
                        <Users size={24} className="text-gray-700" />
                        <span className="text-xs mt-1 text-gray-700">
                          Network
                        </span>
                        {unreadConnectionRequestsCount > 0 && (
                          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {unreadConnectionRequestsCount}
                          </span>
                        )}
                      </Link>

                      <Link
                        to="/notifications"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 relative"
                      >
                        <Bell size={24} className="text-gray-700" />
                        <span className="text-xs mt-1 text-gray-700">
                          Notifications
                        </span>
                        {unreadNotificationCount > 0 && (
                          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {unreadNotificationCount}
                          </span>
                        )}
                      </Link>

                      <Link
                        to={`/profile/${authUser.username}`}
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <User size={24} className="text-gray-700" />
                        <span className="text-xs mt-1 text-gray-700">
                          Profile
                        </span>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Public Navigation - Mobile */}
                    <div className="grid grid-cols-3 gap-4 px-2 mb-4">
                      <Link
                        to="/landing"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <Home size={24} className="text-gray-700" />
                        <span className="text-xs mt-1 text-gray-700">Home</span>
                      </Link>

                      <Link
                        to="/about"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <LuMessageSquareWarning
                          size={24}
                          className="text-gray-700"
                        />
                        <span className="text-xs mt-1 text-gray-700">
                          About
                        </span>
                      </Link>

                      <Link
                        to="/service"
                        onClick={closeMobileMenu}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <MdHomeRepairService
                          size={24}
                          className="text-gray-700"
                        />
                        <span className="text-xs mt-1 text-gray-700">
                          Services
                        </span>
                      </Link>
                    </div>

                    {/* Auth Buttons - Mobile */}
                    <div className="flex flex-col gap-2 px-2">
                      <Link to="/login" onClick={closeMobileMenu}>
                        <button className="w-full bg-black text-white py-3 rounded-md font-semibold transition-all duration-200">
                          Log In
                        </button>
                      </Link>
                      <Link to="/signup" onClick={closeMobileMenu}>
                        <button className="w-full bg-transparent text-black py-3 rounded-md font-semibold border border-black transition-all duration-200 hover:bg-gray-50">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
