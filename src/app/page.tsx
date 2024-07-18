/* eslint-disable react/no-unescaped-entities */
"use client";
import * as Icons from "@/icons";
import mask1 from "../../public/Mask.svg";
import mask2 from "../../public/Mask2.svg";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-[url('../../public/Dot.svg')] overflow-hidden">
      <div className="flex flex-col gap-[21px] justify-center items-center max-w-[1440px] min-h-screen p-24 mb-10">
        <div className="flex flex-row items-center justify-between w-full h-[960px] bg-[url('../../public/Gradient_Blur.svg')] bg-repeat-round">
          <div className="flex flex-col w-[628px] h-[598px] gap-2.5">
            <p className="font-geist font-semibold text-[#0A84FF] text-[16px]">
              EssayMate
            </p>
            <div className="flex flex-col w-[628px]">
              <p className="font-geist font-semibold text-[60px] text-black">
                AI Essay Writer
              </p>
              <p className="font-geist font-semibold text-[60px] bg-purple-gradient w-[668px] text-transparent bg-clip-text">
                Write 5x Faster Essays
              </p>
              <p className="font-geist font-semibold text-[60px] text-black">
                Without Plagiarism
              </p>
            </div>
            <p className="w-[624px] font-geist font-normal text-lg text-[#00030FCC]">
              The AI Essay Writer is an essay writing assistant designed to
              conduct research on essay topic, generate essays with varied tones
              and styles and edit the generated essays using a text editor. It
              ultimately allows users to export their essays as PDF or Word
              documents. This tool is ideal for college students and anyone who
              wants an AI bot to create essays.
            </p>
            <div className="absolute mt-[200px] ml-[575px] z-10">
              <Icons.SpiralArrow />
            </div>
            <div className="flex flex-row w-[365px] gap-2.5 mt-10">
              <Icons.Star />
              <p className="font-geist text-[#00030F] font-semibold text-lg">
                4.6 Stars (78.9k Ratings)
              </p>
            </div>
            <div className="flex flex-row gap-8 mt-5">
              <div className="flex flex-row items-center justify-center gap-2.5 w-[189px] h-[60px] rounded-2xl bg-black border-solid border-4 border-black/[.1] cursor-pointer" onClick={() => router.push('https://apps.apple.com/tr/app/essaymate-ai-essay-writer-hw/id6446486799?l=tr')}>
                <Icons.AppStore />
                <div className="flex flex-col text-white w-[96.5px] h-[38px]">
                  <p className="text-left font-normal text-xs">
                    Download on the
                  </p>
                  <p className="text-left font-medium text-xl -translate-y-1">
                    App Store
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2.5 w-[209px] h-[60px] rounded-2xl bg-black border-solid border-4 border-black/[.1] cursor-pointer" onClick={() => router.push('https://play.google.com/store/apps/details?id=com.ppyn.nexaai')}>
                <Icons.PlayStore />
                <div className="flex flex-col text-white w-[115px] h-[38px]">
                  <p className="text-left font-normal text-xs">GET IT ON</p>
                  <p className="text-left font-medium text-xl -translate-y-1">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex items-center justify-center w-[243px] h-[510px] bg-white rounded-[36px] -rotate-[4deg]  mt-[100px] translate-x-[40px] border border-[#6386FF4D] drop-shadow-[0_7px_136px_rgba(0,0,0,0.1)]">
              <Image
                src={mask1}
                alt=""
                className="min-h-[493px] min-w-[228px]"
                width={228}
                height={493}
              />
            </div>
            <div className="flex items-center justify-center w-[320px] h-[669px] bg-white rounded-[40px] rotate-[5deg] translate-y-[50px] -translate-x-1 z-10 border border-[#6386FF4D] drop-shadow-[0_9px_179px_rgba(0,0,0,0.1)]">
              <Image
                src={mask2}
                alt=""
                className="min-h-[646px] min-w-[299px]"
                width={299}
                height={646}
              />
            </div>
          </div>
        </div>
        <div className="absolute mr-[1068px] -mt-[3754px] -z-10">
          <Icons.Union />
        </div>
        <div className="absolute mr-[1068px] -mt-[1028px] -z-10">
          <Icons.Union />
        </div>
        <div className="absolute translate-x-[540px] -mt-[2390px] -z-10">
          <Icons.Union />
        </div>
        <div className="absolute -ml-[423px] mt-[790px] z-0">
          <Icons.Union />
        </div>
        <div className="absolute ml-[500px] mt-[1470px] z-0">
          <Icons.Union />
        </div>
        <div className="flex flex-row items-center justify-center w-[1320px] h-[650px] bg-white rounded-3xl border border-[#6386FF33] drop-shadow-[0_10px_30px_0_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
          <div className="flex mr-auto w-[793px] h-[610px] ml-5">
            <div className="flex absolute">
              <Icons.Topic />
            </div>
            <div className="flex flex-col w-[482px] h-[348px] gap-5 mt-[131px] ml-[120px]">
              <div className="flex flex-row gap-5 w-[482px] h-[164px] z-10">
                <div className="flex flex-col gap-2.5 p-5 w-[166px] h-[164px] rounded-[20px] bg-white border border-[#6386FF33] drop-shadow-[0_20px_70px_rgba(0,0,0,0.1)]">
                  <Icons.Teacher />
                  <div className="flex flex-col gap-1">
                    <p className="font-satoshi font-bold text-base text-black">
                      Essay Ai
                    </p>
                    <p className="font-satoshi font-medium text-sm text-black/70">
                      Write engaging and interesting tweets. Go viral
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 p-5 w-[166px] h-[164px] rounded-[20px] bg-white border border-[#6386FF33] drop-shadow-[0_20px_70px_rgba(0,0,0,0.1)]">
                  <Icons.ArchiveBook />
                  <div className="flex flex-col gap-1">
                    <p className="font-satoshi font-bold text-base text-black">
                      Essay Outline
                    </p>
                    <p className="font-satoshi font-medium text-sm text-black/70">
                      Write engaging and interesting tweets. Go viral
                    </p>
                  </div>
                </div>
                <div className="w-[106px] h-[164px] rounded-[20px] bg-[#FFFFFF4D] border border-[#6386FF33]"></div>
              </div>
              <div className="flex flex-row gap-5 w-[482px] h-[164px] z-10">
                <div className="w-[106px] h-[164px] rounded-[20px] bg-[#FFFFFF4D] border border-[#6386FF33]"></div>
                <div className="flex flex-col gap-2.5 p-5 w-[166px] h-[164px] rounded-[20px] bg-white border border-[#6386FF33] drop-shadow-[0_20px_70px_rgba(0,0,0,0.1)]">
                  <Icons.MonitorMobile />
                  <div className="flex flex-col gap-1">
                    <p className="font-satoshi font-bold text-base text-black">
                      Summarize Web
                    </p>
                    <p className="font-satoshi font-medium text-sm text-black/70">
                      Write engaging and interesting tweets. Go viral
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 p-5 w-[166px] h-[164px] rounded-[20px] bg-white border border-[#6386FF33] drop-shadow-[0_20px_70px_rgba(0,0,0,0.1)]">
                  <Icons.Note />
                  <div className="flex flex-col gap-1">
                    <p className="font-satoshi font-bold text-base text-black">
                      Summarize PDF
                    </p>
                    <p className="font-satoshi font-medium text-sm text-black/70">
                      Write engaging and interesting tweets. Go viral
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[462px] items-center justify-center mr-auto -translate-x-[174px] gap-2.5">
            <div className="w-[462px]">
              <p className="w-[353px] font-semibold text-[40px] text-black font-geist text-start">
                Essay Research for Any Topic
              </p>
            </div>
            <p className="w-[462px] font-geist font-normal text-lg text-black/[.8]">
              The AI Essay Writer conducts research on any given topic using
              specified keywords, leveraging a database and natural language
              processing (NLP). The app can also summarize PDFs or URLs to
              complete the research. Additionally, users can converse with
              ChatGPT-3 to get answers to any question.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-[9px] gap-[30px] items-center justify-center w-[1320px]">
          <div className="flex flex-col items-center justify-center w-[645px] h-[650px] rounded-3xl bg-white border border-[#6386FF33] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
            <div className="flex absolute items-center justify-center">
              <Icons.SmallDot />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row items-center justify-center z-10 gap-[5px] ml-[16px]">
                <div className="mt-[46px]">
                  <Icons.ThinArrow />
                </div>
                <div className="flex items-center w-[250px] h-[60px] rounded-[50px] bg-white border border-[#6386FF33]">
                  <p className="font-geist font-normal text-lg text-black ml-5">
                    Output Language
                  </p>
                </div>
                <div className="w-[10px] h-[1px] bg-[#6386FF33]"></div>
                <div className="flex items-center w-[250px] h-[60px] rounded-[50px] bg-white border border-[#6386FF33]">
                  <p className="font-geist font-normal text-lg text-black ml-5">
                    Essay Format
                  </p>
                </div>
                <div className="w-[10px] h-[1px] bg-[#6386FF33]"></div>
                <div className="w-[63px] h-[60px] bg-[#EFF3FF] rounded-l-[50px]"></div>
              </div>
              <div className="flex flex-row items-center justify-center z-10 gap-[5px] mr-[16px] rotate-180 -mt-[14px]">
                <div className="mt-[46px]">
                  <Icons.ThinArrow />
                </div>
                <div className="flex items-center w-[250px] h-[60px] rounded-[50px] bg-white border border-[#6386FF33] rotate-180">
                  <p className="font-geist font-normal text-lg text-black ml-5">
                    Target Audience
                  </p>
                </div>
                <div className="w-[10px] h-[1px] bg-[#6386FF33]"></div>
                <div className="flex items-center w-[250px] h-[60px] rounded-[50px] bg-white border border-[#6386FF33] rotate-180">
                  <p className="font-geist font-normal text-lg text-black ml-5">
                    Essay Type
                  </p>
                </div>
                <div className="w-[10px] h-[1px] bg-[#6386FF33]"></div>
                <div className="w-[63px] h-[60px] bg-[#EFF3FF] rounded-l-[50px]"></div>
              </div>
              <div className="flex flex-col gap-2.5 w-[451px] font-geist z-10 mt-[92px] mr-16">
                <p className="w-[272px] font-semibold text-[40px] text-black">
                  Ai Original Essay Creator
                </p>
                <p className="font-normal text-lg text-black/[.8]">
                  The AI essay generator enables users to get topic suggestions,
                  create an essay plan with an outline, and select templates,
                  tones, styles, formats, and target audiences to fully convey
                  their message in the essay.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[645px] h-[650px] rounded-3xl bg-white border border-[#6386FF33] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
            <div className="flex absolute items-center justify-center">
              <Icons.SmallDot />
            </div>
            <div className="flex items-center justify-center w-[295px] h-[100px] rounded-[20px] border border-[#6386FF33] translate-y-[42px]">
              <div className="flex items-center justify-center w-[255px] h-[160px] bg-white border border-[#6386FF33] rounded-[20px] z-10 drop-shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
                <Icons.BlueSticks />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center absolute -translate-x-[5px] z-10 -mt-[180px]">
              <div className="flex items-center justify-center w-[62px] h-[72px] rounded-[14px] bg-white border border-[#6386FF33] z-10 translate-x-[5px] -rotate-[10deg]">
                <Icons.PDFIcon />
              </div>
              <div className="flex items-center justify-center w-[62px] h-[72px] rounded-[14px] bg-white border border-[#6386FF33] z-10 rotate-[10deg]">
                <Icons.DOCIcon />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-[451px] font-geist z-10 mt-[168px] mr-16">
              <p className="w-[304px] font-semibold text-[40px] text-black">
                Ai Essay Export (PDF or Word)
              </p>
              <p className="font-normal text-lg text-black/[.8]">
                The AI essay generator enables users to get topic suggestions,
                create an essay plan with an outline, and select templates,
                tones, styles, formats, and target audiences to fully convey
                their message in the essay.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-[9px] w-[1320px] h-[650px] rounded-3xl bg-white border border-[#6386FF33] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)] z-10">
          <div className="w-[476px] gap-2.5 translate-x-[150px]">
            <p className="font-geist font-semibold text-[40px] text-black">
              Ai Essay Editor
            </p>
            <p className="font-geist font-normal text-lg text-black/[.8]">
              Not satisfied with your essay? No worries. Users can edit
              generated essays by proofreading, injecting key points or
              arguments, and selecting fonts. The editor also displays the
              frequently used words in the essay. Enjoy the editing features to
              enhance your essay.
            </p>
          </div>
          <div className="flex flex-col ml-auto w-[793px] h-[610px] mr-5">
            <div className="flex absolute rotate-180">
              <Icons.Topic />
            </div>
            <div className="flex ml-auto mr-[100px] mt-[115px] w-[397px] h-[180px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00]">
              <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                <div className="mt-8 flex gap-4 items-center h-[66px] w-[315px]"></div>
              </div>
            </div>
            <div className="flex ml-auto mr-[160px] mb-[113px] w-[277px] h-[310px] rounded-[20px] border border-[#6386FF33]"></div>
            <div className="flex items-center justify-center absolute translate-x-[326px] mt-[145px] w-[337px] h-[320px] rounded-[20px] bg-white border border-[#6386FF33]">
              <p className="w-[307px] h-[280px] font-medium text-xl text-[#AEAEAE]">
                Ensuring{" "}
                <span className="text-black bg-[#C1E6FF]">
                  that your feline friend is well-fed and taken
                </span>{" "}
                care of is of utmost importance. However, the demands of a busy
                lifestyle can often make it challenging to stick to a regular
                feeding schedule. This is where an automatic cat feeder can be a
                game-chager. An automaic cat feder is a device that allows
              </p>
              <div className="flex absolute -translate-y-[130px] -translate-x-[65px]">
                <Icons.CircleStick />
              </div>
              <div className="flex absolute -translate-y-[94.5px] translate-x-[46px] rotate-180">
                <Icons.CircleStick />
              </div>
              <div className="flex absolute w-[317px] h-[208px] mt-[60px] bg-gradient-to-b from-[#FFFFFF00] to-white"></div>
            </div>
            <div className="flex absolute ml-[467px] mt-[235px] w-[267px] h-[40px] items-center justify-center">
              <Icons.Synonyms />
            </div>
            <div className="flex absolute ml-[238px] mt-[307px] w-[267px] h-[40px] items-center justify-center">
              <Icons.TextType />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[129px] w-[1320px] gap-[30px]">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <p className="font-geist font-semibold text-[#8038FD] text-base">
              Testimonial
            </p>
            <p className="font-geist font-semibold text-black text-[40px]">
              What people are saying?
            </p>
          </div>
          <div className="flex flex-row gap-[30px] w-[1320px] items-center justify-center">
            <div className="flex w-[420px] h-[294px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
              <div className="rounded-[24px] p-12 bg-white">
                <div className="absolute -translate-y-[90px] -rotate-[30deg]">
                  <Icons.Test1 />
                </div>
                <div className="mt-[60px] flex flex-col h-[66px] w-[322px] gap-2.5 items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Icons.FiveStar />
                  </div>
                  <p className="font-geist font-semibold text-base text-black">
                    Lightning-Fast Essay Writing Made Easy!
                  </p>
                  <p className="font-geist font-normal text-sm text-black/[.8] text-center w-[362px]">
                    As a college student handing multiple essay homework, I've
                    tried some essay writing app, but EssayMate: AI Essay Writer
                    app stands out for its 4x fast. The moment I input my
                    requirements, the app generates a well-structured and
                    coherent essay with my all input consideration.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-[420px] h-[294px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
              <div className="rounded-[24px] p-12 bg-white">
                <div className="mt-[40px] flex flex-col h-[66px] w-[322px] gap-2.5 items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Icons.FiveStar />
                  </div>
                  <p className="font-geist font-semibold text-base text-black">
                    Orginial Essay Creator
                  </p>
                  <p className="font-geist font-normal text-sm text-black/[.8] text-center w-[362px]">
                    As a university student, I have struggled with my academic
                    copy essay writing. That's where the Essaymate:AI Essay
                    Writer app has show me some tactic to complete my essay
                    without plagmarism.
                  </p>
                </div>
                <div className="absolute translate-y-[54px] -rotate-[15deg]">
                  <Icons.Test2 />
                </div>
              </div>
            </div>
            <div className="flex w-[420px] h-[294px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
              <div className="rounded-[24px] p-12 bg-white">
                <div className="flex absolute -translate-y-[75px] translate-x-[240px] rotate-[15deg] ml-auto">
                  <Icons.Test3 />
                </div>
                <div className="mt-[40px] flex flex-col h-[66px] w-[322px] gap-2.5 items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Icons.FiveStar />
                  </div>
                  <p className="font-geist font-semibold text-base text-black">
                    Editior Feature of Essay
                  </p>
                  <p className="font-geist font-normal text-sm text-black/[.8] text-center w-[362px]">
                    Most of app does not have editor features in app however
                    EssayMate has it. I recently tried the EssayMate app essay
                    creator, specifically its "Essay Editing" feature, and this
                    is so advanced future for me.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[30px] max-w-[1320px] items-center justify-between mt-[179px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col w-[357px] gap-2.5">
                <p className="flex font-geist font-semibold text-[40px] text-black">
                  How it Work
                </p>
                <p className="flex font-geist font-normal text-lg text-black/[.8]">
                  Follow link to download the app or find the app on app store
                  with “Essaymate” brand. Follow path to create essay as you
                  want.
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div
                  className={`flex items-center justify-center w-[100px] h-[50px] border border-[#6386FF33] rounded-[50px] bg-white cursor-pointer transition duration-300 ${
                    isAtStart
                      ? "text-black/[.3]"
                      : "text-black drop-shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
                  }`}
                  onClick={scrollLeft}
                >
                  <Icons.Arrow />
                </div>
                <div
                  className={`flex items-center justify-center w-[100px] h-[50px] border border-[#6386FF33] rounded-[50px] bg-white cursor-pointer transition duration-300 ${
                    isAtEnd
                      ? "text-black/[.3]"
                      : "text-black drop-shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
                  }`}
                  onClick={scrollRight}
                >
                  <div className="rotate-180">
                    <Icons.Arrow />
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={scrollContainerRef}
              className="flex flex-row max-w-[970px] h-[350px] overflow-hidden scrollbar-hide space-x-5 translate-x-[42px]"
            >
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.Mobile />
                    <p className="font-geist font-medium text-black text-xl w-[200px]">
                      Open the homepage of app
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.SliderVertical />
                    <p className="font-geist font-medium text-black text-xl w-[200px]">
                      Get to Essay Writing Section
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.ArchiveBook />
                    <p className="font-geist font-medium text-black text-xl w-[203px]">
                      Make research based on the keyword, topic, PDF or URL if
                      needed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.Note />
                    <p className="font-geist font-medium text-black text-xl w-[200px]">
                      Generate outline or jump into essay writing step.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.Quote />
                    <p className="font-geist font-medium text-black text-xl w-[205px]">
                      Choose subject, write key argument, select essay format,
                      type, output language, lenght of essay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.GlobalSearch />
                    <p className="font-geist font-medium text-black text-xl w-[210px]">
                      Get more preferences while creating essay such as tone of
                      vioce, academic level, target audience, adding keywords
                      and cititation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.Message />
                    <p className="font-geist font-medium text-black text-xl w-[219px]">
                      Review essay, edit any sentences or keywords if
                      neccessary.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-[270px] h-[290px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
                <div className="rounded-[24px] w-[300px] bg-white ">
                  <div className="flex flex-col gap-5 ml-[30px] mt-[50px]">
                    <Icons.Book />
                    <p className="font-geist font-medium text-black text-xl w-[170px]">
                      Export essay with different format.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[30px] max-w-[433px] mt-[129px]">
            <div className="w-[160px] h-[1px] bg-[#96B8F8]"></div>
            <div className="spin-animation">
              <Icons.React />
            </div>
            <div className="w-[160px] h-[1px] bg-[#96B8F8]"></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[30px] max-w-[840px] mt-[129px]">
            <div className="flex flex-col gap-2.5 items-center justify-center w-[617px]">
              <p className="font-geist font-semibold text-base text-[#1D9EBB]">
                F.A.Q
              </p>
              <p className="font-geist font-semibold text-[40px] text-black">
                Frequently Asked Questions
              </p>
              <p className="font-geist font-normal text-lg text-black/80 text-center">
                There's no limit to what you can do with Essay Mate. You can
                find answers to all the questions you have in mind.
              </p>
            </div>
            <div className="absolute flex mt-[670px] ml-[577px]">
              <Icons.Spiral />
            </div>
            <div className="flex w-[840px] h-[1005px] rounded-3xl p-px bg-gradient-to-b from-[#6386FF33] to-[#6386FF00] drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] shadow-[0_7px_3px_0_rgba(0,0,0,0.06)]">
              <div className="rounded-[24px] w-[838px] bg-white ">
                <div className="flex flex-col gap-5 ml-[30px] mt-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bottom-0 w-full h-[134px] items-center justify-center bg-black z-10">
        <div className="flex items-center justify-center w-[1440px] h-[134px] bg-black">
          <div className="w-[1240px] flex flex-row justify-between items-center">
            <div className="flex flex-row gap-[50px]">
              <p className="font-geist font-medium text-base text-white/70">
                ABOUT US
              </p>
              <p className="font-geist font-medium text-base text-white/70">
                PAPYON APPS
              </p>
              <p className="font-geist font-medium text-base text-white/70">
                PAPYON BLOG
              </p>
              <p className="font-geist font-medium text-base text-white/70">
                CONTACT US
              </p>
            </div>
            <div>
              <p className="font-geist font-medium text-xl text-white/70">
                Made with ❤️ in Izmir, Turkey 🇹🇷{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
