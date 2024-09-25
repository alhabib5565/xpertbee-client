import React from "react";
import Container from "./Container";
import logo from "../../assets/logo/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  ChevronRight,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#FDF5E5] py-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* image */}
          <div className="space-y-4">
            <Link href={"/"}>
              <Image alt="" src={logo} width={171} height={43} />
            </Link>
            <p className="text-[10px] font-medium leading-[30px]">
              Subscribe to receive all the latest information about technology
              trends and updates on our upcoming courses straight to your inbox.
              Don’t miss out on staying informed and getting ahead in your
              field!
            </p>
            <Input placeholder="Enter email addess" className="h-10" />
            <Button className="rounded-3xl w-full " size="sm">
              Subscribe
            </Button>
          </div>
          {/* quick links */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-[600]">Quick Link</h4>
              <span className="bg-primary w-14 p-0.5 rounded block"></span>
            </div>
            <div className="space-y-3">
              <Link
                href={"#"}
                className="flex gap-2 items-center w-fit text-sm font-[500] "
              >
                <ChevronRight className="size-5 text-primary" /> Home
              </Link>
              <Link
                href={"#"}
                className="flex gap-2 items-center w-fit text-sm font-[500] "
              >
                <ChevronRight className="size-5 text-primary" /> Blog
              </Link>
              <Link
                href={"#"}
                className="flex gap-2 items-center w-fit text-sm font-[500] "
              >
                <ChevronRight className="size-5 text-primary" /> About US
              </Link>
            </div>
          </div>
          {/* Support */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-[600]">Support</h4>
              <span className="bg-primary w-14 p-0.5 rounded block"></span>
            </div>
            <div className="space-y-3">
              <Link
                href={"#"}
                className="flex gap-2 items-center w-fit text-sm font-[500] "
              >
                <ChevronRight className="size-5 text-primary" /> Why US
              </Link>
              <Link
                href={"#"}
                className="flex gap-2 items-center w-fit text-sm font-[500] "
              >
                <ChevronRight className="size-5 text-primary" /> Pricing
              </Link>
              <Link
                href={"#"}
                className="flex gap-2 items-center w-fit text-sm font-[500] "
              >
                <ChevronRight className="size-5 text-primary" /> FAQ
              </Link>
            </div>
          </div>
          {/* contact us */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-[600]">Contuct US</h4>
              <span className="bg-primary w-14 p-0.5 rounded block"></span>
            </div>
            <div className="space-y-3">
              <p className="flex gap-2 items-center w-fit text-[12px] font-[500] ">
                <span className="h-5 w-5 ">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>{" "}
                Office Address: Level 3, House 26, Road 4, Block F, Sector 1
                Jaharul Islam City, Aftabnagar, Rampur, Dhaka.
              </p>
              <p className="flex gap-2 items-center w-fit text-[12px] font-[500] ">
                <MessageCircle className="size-5 text-primary" />
                support@xpertbee.com
              </p>
              <p className="flex gap-2 items-center w-fit text-[12px] font-[500] ">
                <Phone className="size-5 text-primary" /> +880 1795848424
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <p className="text-sm font-medium">
            © {year} Xpert Bee | Powered by Xpert Bee
          </p>
          <p className="text-sm font-medium flex gap-4 items-center">
            Follow Us{" "}
            <Link
              target="_blank"
              className="text-primary"
              href={"/https://web.facebook.com/xpertbeebd?_rdc=2&_rdr"}
            >
              <Facebook />
            </Link>
            {/* <Link
              target="_blank"
              className="text-primary"
              href={"/https://web.facebook.com/xpertbeebd?_rdc=2&_rdr"}
            >
              <Linkedin />
            </Link> */}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
