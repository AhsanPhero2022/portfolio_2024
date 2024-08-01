import Image from "next/image";
import React from "react";

const Articles = () => {
  return (
    <section className="container">
      <div className=" shadow-md bg-primary px-6 pb-6">
        <div className="my-12">
          <h1 className="p-4 text-3xl text-accent font-semibold">
            My Articles
          </h1>
          <hr className="border border-accent"></hr>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
          <div className="p-5 shadow-xl bg-primary mb-6">
            <div className="mt-4 mb-2">
              <h1 className="font-semibold ">
                Git Rebase vs Git Merge: A Comprehensive Guide
              </h1>
            </div>
            <div>
              <div className="space-y-4 ">
                <Image
                  width={400}
                  height={100}
                  className="w-full h-[300px] rounded-md"
                  src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0wwkjug507vrbvrftgsf.png"
                  alt=""
                />
                <p className="">
                  Git, a distributed version control system, offers a variety of
                  ways developers can integrate changes from one branch into
                  another: git merge and git rebase being two of the most
                  commonly used strategies...
                </p>
                <div className="flex justify-between ">
                  <div className="flex gap-4">
                    <p>#git</p>
                    <p>#javascript</p>
                    <p>#tailwind</p>
                    <p>#react</p>
                  </div>
                  <div className="">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://dev.to/ahsanphero2022/git-rebase-vs-git-merge-a-comprehensive-guide-33og"
                      className="text-blue-500"
                    >
                      Read more...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sesond */}
          <div className="p-4 shadow-xl bg-primary mb-6">
            <div className="mt-4 mb-2">
              <h1 className="font-semibold">
                LocalStack - Mock AWS in local development
              </h1>
            </div>
            <div>
              <div className="space-y-4 ">
                <Image
                  width={400}
                  height={100}
                  className="w-full h-[300px] rounded-md"
                  src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpap07kdqyenccwjlx9tp.png"
                  alt=""
                />
                <p className="">
                  Most of us are familiar with Amazon Web Services (AWS) and
                  have probably used their cloud computing services at some
                  point in our careers. AWS is a go-to solution for many
                  developers when it comes to building ...
                </p>
                <div className="flex justify-between ">
                  <div className="flex gap-4">
                    <p>#AWS</p>
                    <p>#javascript</p>
                    <p>#hosting</p>
                    <p>#website</p>
                  </div>
                  <div className="">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://dev.to/ahsanphero2022/localstack-mock-aws-in-local-development-229f"
                      className="text-blue-500"
                    >
                      Read more...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {third} */}
          <div className="p-4 shadow-xl bg-primary mb-6">
            <div className="mt-4 mb-2">
              <h1 className="font-semibold">Servers and Web Hosting</h1>
            </div>
            <div>
              <div className="space-y-4 ">
                <Image
                  width={400}
                  height={100}
                  className="w-full h-[300px] rounded-md"
                  src="https://ak.picdn.net/offset/photos/5cf6d502469b183482a194fb/medium/offset_823172.jpg="
                  alt=""
                />
                <p className="">
                  Servers, the powerhouses of the digital world, are specialized
                  computers designed to process requests and distribute data
                  over the internet and local networks. These robust machines
                  form the backbone of...
                </p>
                <div className="flex justify-between ">
                  <div className="flex gap-4">
                    <p>#CloudHosting</p>
                    <p>#VPS</p>
                    <p>#Hosting</p>
                    <p>#Servers</p>
                  </div>
                  <div className="">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/posts/soriful-ismam_webhosting-cloudhosting-dedicatedserver-activity-7205721211983527937-PHwO?utm_source=share&utm_medium=member_desktop"
                      className="text-blue-500"
                    >
                      Read more...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
