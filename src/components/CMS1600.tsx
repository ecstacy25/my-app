import Button from "../components/Button";
import Icon22 from "../assets/Icon22";
import Input from "../components/Input";
import Badge from "../components/Badge";
import Icon23 from "../assets/Icon23";
import Icon24 from "../assets/Icon24";
import Icon25 from "../assets/Icon25";
import Icon26 from "../assets/Icon26";
import Icon43 from "../assets/Icon43";
import Icon28 from "../assets/Icon28";
import Icon29 from "../assets/Icon29";
import Icon30 from "../assets/Icon30";
import Icon32 from "../assets/Icon32";
import Icon34 from "../assets/Icon34";
import Icon35 from "../assets/Icon35";
import AvatarImage from "../assets/AvatarImage";
import AvatarImage1 from "../assets/AvatarImage1";
import AvatarImage2 from "../assets/AvatarImage2";
import AvatarImage3 from "../assets/AvatarImage3";
import AvatarImage4 from "../assets/AvatarImage4";
import AvatarImage5 from "../assets/AvatarImage5";
import AvatarImage6 from "../assets/AvatarImage6";
import AvatarImage7 from "../assets/AvatarImage7";
import Icon36 from "../assets/Icon36";
import Icon38 from "../assets/Icon38";
import Icon40 from "../assets/Icon40";
import Icon42 from "../assets/Icon42";
import Icon49 from "../assets/Icon49";
import Tab from "../components/Tab";
import Icon53 from "../assets/Icon53";
import Tooltip from "../components/Tooltip";
import Chart from "../assets/Chart";

export default function CMS1600(props: CMS1600Props) {
  return (
    <div
      className={`font-roboto bg-[#F7F8FA] h-[1325px] w-[1600px] items-start flex-col inline-flex ${props.className}`}
      style={props.style}
    >
      <div className="h-[155px] text-left gap-2.5 w-full">
        <div
          className="pr-[70px] pl-[60px] pb-[60px] pt-[45px] h-[155px] self-stretch flex-grow items-center flex-col flex flex-1"
        >
          <div
            className="gap-[119px] h-[50px] self-stretch items-center justify-between flex w-full"
          >
            <div
              className="text-[#6B7A99] gap-[30px] font-bold items-center flex"
            >
              <Button type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE" />
              <p className="h-[30px] leading-[30px] w-24 text-lg">
                Constructor
              </p>
            </div>
            <div className="gap-[30px] items-center justify-center flex">
              <p
                className="h-[25px] w-[63px] text-[#8833FF] leading-[25px] text-[13px] font-black cursor-[pointer]"
              >
                Dashboard
              </p>
              <p
                className="h-[25px] w-[37px] text-[#6B7A99] leading-[25px] text-[13px] font-bold cursor-[pointer] hover:text-[#8833FF]"
              >
                Pages
              </p>
              <p
                className="h-[25px] w-[34px] text-[#6B7A99] leading-[25px] text-[13px] font-bold cursor-[pointer] hover:text-[#8833FF]"
              >
                Posts
              </p>
              <p
                className="h-[25px] text-[#6B7A99] leading-[25px] text-[13px] w-7 font-bold cursor-[pointer] hover:text-[#8833FF]"
              >
                Files
              </p>
              <p
                className="h-[25px] w-[34px] text-[#6B7A99] leading-[25px] text-[13px] font-bold cursor-[pointer] hover:text-[#8833FF]"
              >
                Users
              </p>
              <Icon22 className="h-[30px] w-[30px] cursor-[pointer]" />
            </div>
            <Input className="h-[50px] w-[300px]" />
            <div className="items-center justify-center flex gap-10">
              <div className="items-center flex-col flex relative">
                <Button type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE1" />
                <Badge type="SQUARE_SMALL_ROUNDED_PRIMARY_TYPE" />
              </div>
              <Icon23 className="h-[30px] w-[30px] cursor-[pointer]" />
              <Icon24 className="h-[30px] w-[30px] cursor-[pointer]" />
              <Icon25 className="h-[30px] w-[30px] cursor-[pointer]" />
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold self-stretch items-start flex mt-0 w-full">
        <div
          className="pl-[60px] h-[1170px] w-[370px] text-left items-start flex gap-2.5"
        >
          <div
            className="rounded-[20px] gap-[25px] border-[#EDEFF2] pb-[25px] pt-[25px] pr-[15px] pl-[15px] flex-grow items-center flex-col flex border-2 border-solid flex-1"
          >
            <div
              className="text-[#6B7A99] gap-[71px] pr-[15px] pl-[15px] self-stretch items-start justify-between flex w-full"
            >
              <div className="items-center flex gap-5">
                <Icon26 className="h-[30px] w-[30px]" />
                <p className="w-[59px] h-5 leading-5 text-xs cursor-[pointer]">
                  Dashboard
                </p>
              </div>
              <div className="items-start flex gap-2.5">
                <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE" />
                <Icon43 className="h-[30px] w-[30px] cursor-[pointer]" />
              </div>
            </div>
            <div
              className="p-[15px] rounded-[10px] bg-[#8833FF] drop-shadow-lg text-white self-stretch items-start justify-between flex gap-24 w-full"
            >
              <div className="items-center flex gap-5">
                <Icon28 className="h-[30px] w-[30px] cursor-[pointer]" />
                <p className="w-[34px] h-5 leading-5 text-xs">Pages</p>
              </div>
              <div className="items-start flex gap-2.5">
                <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE1" />
                <Icon29 className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className="text-[#6B7A99] gap-[73px] pr-[15px] pl-[15px] self-stretch items-start justify-between flex w-full"
            >
              <div className="items-center flex gap-5">
                <Icon30 className="h-[30px] w-[30px]" />
                <p className="w-[31px] h-5 leading-5 text-xs">Posts</p>
              </div>
              <div className="gap-[9px] overflow-clip items-start flex">
                <Badge type="DEFAULT_LARGE_ROUNDED_PRIMARY_TYPE" />
                <Icon43 className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className="text-[#6B7A99] gap-[68px] pr-[15px] pl-[15px] self-stretch items-start justify-between flex w-full"
            >
              <div className="gap-[19px] items-center flex">
                <Icon32 className="h-[30px] w-[30px] cursor-[pointer]" />
                <p className="w-[62px] h-5 leading-5 text-xs ">
                  Media Files
                </p>
              </div>
              <div className="items-start flex gap-2.5">
                <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE" />
                <Icon43 className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className="text-[#6B7A99] rounded-[10px] drop-shadow-lg h-[435px] self-stretch items-start flex-col flex bg-white w-full"
            >
              <div
                className="h-[60px] pr-[15px] pl-[15px] self-stretch items-center justify-center flex-col flex gap-2.5 w-full"
              >
                <div
                  className="gap-[98px] pb-[15px] pt-[15px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <Icon34 className="h-[30px] w-[30px]" />
                    <p className="h-5 w-8 leading-5 text-xs">Users</p>
                  </div>
                  <div className="items-start flex gap-2.5">
                    <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE2" />
                    <Icon35 className="h-[30px] w-[30px]" />
                  </div>
                </div>
              </div>
              <div
                className="p-[15px] gap-[15px] self-stretch items-center flex-col flex mt-0 w-full"
              >
                <div
                  className="gap-[50px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage className="h-[30px] w-[30px]" />
                    <p className="w-[65px] h-5 leading-5 text-xs">
                      Bess Atkins
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
                   />
                </div>
                <div
                  className="gap-[51px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage1
                      className="h-[30px] w-[30px]"
                     />
                    <p className="h-5 w-16 leading-5 text-xs">
                      Brett Foster
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
                   />
                </div>
                <div
                  className="gap-[52px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage2
                      className="h-[30px] w-[30px]"
                     />
                    <p className="w-[63px] h-5 leading-5 text-xs">
                      Leona Todd
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
                   />
                </div>
                <div
                  className="self-stretch items-start justify-between flex gap-16 w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage3
                      className="h-[30px] w-[30px]"
                     />
                    <p className="w-[51px] h-5 leading-5 text-xs">
                      Ann Ortiz
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
                   />
                </div>
                <div
                  className="gap-[34px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage4
                      className="h-[30px] w-[30px]"
                     />
                    <p className="w-[81px] h-5 leading-5 text-xs">
                      Nicholas Black
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
                   />
                </div>
                <div
                  className="self-stretch items-start justify-between flex gap-11 w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage5
                      className="h-[30px] w-[30px]"
                     />
                    <p className="w-[71px] h-5 leading-5 text-xs">
                      Ollie Harmon
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
                   />
                </div>
                <div
                  className="gap-[37px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage6
                      className="h-[30px] w-[30px]"
                     />
                    <p className="w-[78px] h-5 leading-5 text-xs">
                      Vincent Reese
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
                   />
                </div>
                <div
                  className="gap-[39px] self-stretch items-start justify-between flex w-full"
                >
                  <div className="items-center flex gap-5">
                    <AvatarImage7
                      className="h-[30px] w-[30px]"
                     />
                    <p className="w-[76px] h-5 leading-5 text-xs">
                      Ida Robertson
                    </p>
                  </div>
                  <Button
                    type="LEFT_ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
                   />
                </div>
              </div>
            </div>
            <div
              className="text-[#6B7A99] gap-[71px] pr-[15px] pl-[15px] self-stretch items-start justify-between flex w-full"
            >
              <div className="items-center flex gap-5">
                <Icon36 className="h-[30px] w-[30px]" />
                <p className="w-[59px] h-5 leading-5 text-xs">
                  Categories
                </p>
              </div>
              <div className="items-start flex gap-2.5">
                <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE" />
                <Icon43 className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className="text-[#6B7A99] gap-[104px] pr-[15px] pl-[15px] self-stretch items-start justify-between flex w-full"
            >
              <div className="items-center flex gap-5">
                <Icon38 className="h-[30px] w-[30px]" />
                <p className="w-[26px] h-5 leading-5 text-xs">Tags</p>
              </div>
              <div className="items-start flex gap-2.5">
                <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE" />
                <Icon43 className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className="text-[#6B7A99] gap-[71px] pr-[15px] pl-[15px] self-stretch items-start justify-between flex w-full"
            >
              <div className="items-center flex gap-5">
                <Icon40 className="h-[30px] w-[30px]" />
                <p className="w-[59px] h-5 leading-5 text-xs">Comments</p>
              </div>
              <div className="items-start flex gap-2.5">
                <Badge type="SQUARE_LARGE_ROUNDED_LIGHT_TYPE" />
                <Icon43 className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className="text-[#6B7A99] gap-[125px] pr-[15px] pl-[15px] self-stretch items-center justify-between flex w-full"
            >
              <div className="items-center flex gap-5">
                <Icon42 className="h-[30px] w-[30px]" />
                <p className="w-[45px] h-5 leading-5 text-xs">Settings</p>
              </div>
              <Icon43 className="h-[30px] w-[30px]" />
            </div>
          </div>
        </div>
        <div
          className="pr-[60px] pl-[60px] flex-grow items-start justify-center flex ml-0 flex-1"
        >
          <div className="gap-[30px] flex-grow items-start flex flex-1">
            <div
              className="gap-[30px] flex-grow items-end flex-col flex flex-1"
            >
              <div
                className="gap-[30px] text-white self-stretch items-start flex w-full"
              >
                <div
                  className="rounded-[10px] bg-[#29CC39] drop-shadow-lg p-5 flex-grow items-center justify-between flex-col flex h-40 flex-1"
                >
                  <div
                    className="text-left self-stretch items-center justify-between flex gap-14 w-full"
                  >
                    <p className="w-[34px] h-5 leading-5 text-xs">
                      Pages
                    </p>
                    <Icon49 className="h-[30px] w-[30px]" />
                  </div>
                  <p
                    className="h-[30px] w-[57px] mt-[-68.5px] leading-[30px] text-[22px] text-center"
                  >
                    1 345
                  </p>
                  <div
                    className="mt-[-68.5px] self-stretch items-start justify-center flex gap-2 w-full"
                  >
                    <Button
                      type="ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
                     />
                    <Button
                      type="DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE"
                     />
                  </div>
                </div>
                <div
                  className="rounded-[10px] bg-[#8833FF] drop-shadow-lg p-5 flex-grow items-center justify-between flex-col flex h-40 flex-1"
                >
                  <div
                    className="gap-[59px] text-left self-stretch items-center justify-between flex w-full"
                  >
                    <p className="w-[31px] h-5 leading-5 text-xs">
                      Posts
                    </p>
                    <Icon49 className="h-[30px] w-[30px]" />
                  </div>
                  <p
                    className="h-[30px] w-[69px] mt-[-74.5px] leading-[30px] text-[22px] text-center"
                  >
                    12 456
                  </p>
                  <div
                    className="mt-[-74.5px] self-stretch items-start justify-center flex gap-2 w-full"
                  >
                    <Button
                      type="ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
                     />
                    <Button
                      type="DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE1"
                     />
                  </div>
                </div>
                <div
                  className="rounded-[10px] bg-[#FF6633] drop-shadow-lg p-5 flex-grow items-center justify-between flex-col flex h-40 flex-1"
                >
                  <div
                    className="gap-[58px] text-left self-stretch items-center justify-between flex w-full"
                  >
                    <p className="h-5 w-8 leading-5 text-xs">Users</p>
                    <Icon49 className="h-[30px] w-[30px]" />
                  </div>
                  <p
                    className="h-[30px] w-[26px] mt-[-53px] leading-[30px] text-[22px] text-center"
                  >
                    21
                  </p>
                  <div
                    className="mt-[-53px] self-stretch items-start justify-center flex gap-2 w-full"
                  >
                    <Button
                      type="ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
                     />
                    <Button
                      type="DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE2"
                     />
                  </div>
                </div>
              </div>
              <div
                className="gap-[30px] self-stretch items-start flex w-full"
              >
                <div
                  className="rounded-[10px] bg-[#33BFFF] drop-shadow-lg text-white p-5 flex-grow items-center justify-between flex-col flex h-40 flex-1"
                >
                  <div
                    className="gap-[61px] text-left self-stretch items-center justify-between flex w-full"
                  >
                    <p className="w-[26px] h-5 leading-5 text-xs">
                      Files
                    </p>
                    <Icon49 className="h-[30px] w-[30px]" />
                  </div>
                  <p
                    className="h-[30px] w-[57px] mt-[-68.5px] leading-[30px] text-[22px] text-center"
                  >
                    1 220
                  </p>
                  <div
                    className="mt-[-68.5px] self-stretch items-start justify-center flex gap-2 w-full"
                  >
                    <Button
                      type="ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
                     />
                    <Button
                      type="DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE3"
                     />
                  </div>
                </div>
                <div
                  className="rounded-[10px] bg-[#1A2233] drop-shadow-lg text-white p-5 flex-grow items-center justify-between flex-col flex h-40 flex-1"
                >
                  <div
                    className="gap-[31px] text-left self-stretch items-center justify-between flex w-full"
                  >
                    <p className="w-[59px] h-5 leading-5 text-xs">
                      Categories
                    </p>
                    <Icon49 className="h-[30px] w-[30px]" />
                  </div>
                  <p
                    className="h-[30px] w-[26px] mt-[-53px] leading-[30px] text-[22px] text-center"
                  >
                    65
                  </p>
                  <div
                    className="mt-[-53px] self-stretch items-start justify-center flex gap-2 w-full"
                  >
                    <Button
                      type="ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
                     />
                    <Button
                      type="DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE4"
                     />
                  </div>
                </div>
                <div
                  className="rounded-[10px] drop-shadow-lg p-5 flex-grow items-center justify-between flex-col flex bg-white h-40 flex-1"
                >
                  <div
                    className="text-[#7D8FB3] gap-[31px] text-left self-stretch items-center justify-between flex w-full"
                  >
                    <p className="w-[59px] h-5 leading-5 text-xs">
                      Comments
                    </p>
                    <Icon49 className="h-[30px] w-[30px]" />
                  </div>
                  <p
                    className="h-[30px] w-[57px] mt-[-68.5px] text-[#6B7A99] leading-[30px] text-[22px] text-center"
                  >
                    9 876
                  </p>
                  <div
                    className="mt-[-68.5px] self-stretch items-start justify-center flex gap-2 w-full"
                  >
                    <Button
                      type="ICON_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
                     />
                    <Button
                      type="DEFAULT_EXTRA_SMALL_ROUNDED_PRIMARY_TYPE5"
                     />
                  </div>
                </div>
              </div>
              <div
                className="rounded-[10px] drop-shadow-lg h-[350px] text-left self-stretch items-start flex-col flex bg-white w-full"
              >
                <div
                  className="text-[#4D5E80] h-[65px] self-stretch items-center justify-between flex w-full px-5"
                >
                  <p className="h-[25px] w-[55px] leading-[25px] text-[13px]">
                    User Stat
                  </p>
                  <Tab className="h-[65px] ml-0" type="TAB_TYPE" />
                  <Icon53 className="h-[30px] w-[30px] ml-0" />
                </div>
                <div
                  className="text-[#ADB8CC] pl-[30px] self-stretch flex-grow items-center justify-end flex-col flex mt-0 pr-10 pb-5 flex-1 w-full"
                >
                  <div
                    className="gap-[30px] h-[205px] self-stretch items-start flex w-full"
                  >
                    <div
                      className="h-[205px] flex-grow items-start flex-col flex relative flex-1"
                    >
                      <div
                        className="gap-[5px] self-stretch items-end justify-between flex relative w-full"
                      >
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[175px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[135px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div
                            className="items-center flex-col flex gap-2.5 h-5 w-3"
                          >
                            <p className="text-[10px] h-5 w-1.5 leading-5">
                              9
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[115px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[135px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              11
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[100px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[71px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              13
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[115px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[131px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              15
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[100px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[71px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              17
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[150px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[135px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              19
                            </p>
                          </div>
                        </div>
                        <div
                          className="items-center flex-col flex gap-2.5 relative"
                        >
                          <div>
                            <div
                              className="bg-[#29CC39] h-[150px] w-[5px] rounded-tr-[120px] rounded-tl-[120px] relative"
                             />
                          </div>
                          <div>
                            <div className="relative h-5 w-3" />
                          </div>
                          <Tooltip type="DEFAULT_TOP_TYPE" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[135px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              21
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[105px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[85px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              23
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[120px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[130px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              25
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[85px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[100px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              27
                            </p>
                          </div>
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[71px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="h-5 w-3" />
                        </div>
                        <div className="items-center flex-col flex gap-2.5">
                          <div
                            className="bg-[#29CC39] h-[121px] w-[5px] rounded-tr-[120px] rounded-tl-[120px]"
                           />
                          <div className="gap-2.5 h-5 w-3">
                            <p className="text-[10px] h-5 w-3 leading-5">
                              29
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-[#F5F6F7] top-[173px] w-[422px] mb-0 absolute left-0 h-0.5"
                       />
                    </div>
                    <div className="items-start flex-col flex gap-2.5">
                      <p className="w-[18px] text-[10px] h-5 leading-5">
                        600
                      </p>
                      <p className="w-[18px] text-[10px] h-5 leading-5">
                        500
                      </p>
                      <p className="w-[18px] text-[10px] h-5 leading-5">
                        400
                      </p>
                      <p className="w-[18px] text-[10px] h-5 leading-5">
                        300
                      </p>
                      <p className="w-[18px] text-[10px] h-5 leading-5">
                        200
                      </p>
                      <p className="w-[18px] text-[10px] h-5 leading-5">
                        100
                      </p>
                      <p className="text-[10px] h-5 w-1.5 leading-5">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-[10px] drop-shadow-lg h-[350px] text-left self-stretch items-start flex-col flex bg-white w-full"
              >
                <div
                  className="text-[#4D5E80] h-[65px] self-stretch items-center justify-between flex w-full px-5"
                >
                  <p className="h-[25px] leading-[25px] text-[13px] w-14 ">
                    Statistics
                  </p>
                  <Tab className="h-[65px] ml-0" type="TAB_TYPE1" />
                  <Icon53 className="h-[30px] w-[30px] ml-0" />
                </div>
                <div
                  className="self-stretch flex-grow items-center justify-end flex-col flex mt-0 pb-5 flex-1 w-full px-10"
                >
                  <div
                    className="h-[230px] self-stretch items-start flex-col flex w-full"
                  >
                    <div
                      className="text-[#6B7A99] h-[50px] self-stretch items-center flex w-full"
                    >
                      <div
                        className="h-[50px] w-[110px] self-stretch items-center flex"
                      >
                        <p className="w-[42px] h-5 leading-5 text-xs ">
                          Visitors
                        </p>
                      </div>
                      <div
                        className="h-[50px] self-stretch flex-grow items-start flex ml-0 flex-1"
                      >
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#FF6633] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 relative flex-1"
                        >
                          <div className="flex-1">
                            <div
                              className="w-[35px] bg-[#FF6633] h-[5px] rounded-br-[10px] rounded-tr-[10px] relative flex-1"
                             />
                          </div>
                          <div className="w-full">
                            <div
                              className="left-[calc(50%_-_21px_+_16px)] h-[233px] w-[42px] items-center flex-col flex ml-0 -top-8 absolute px-px"
                            >
                              <Tooltip type="DEFAULT_TOP_TYPE1" />
                              <div
                                className="h-[198px] bg-[#FF66330D] mt-0 flex-1 w-0.5"
                               />
                            </div>
                          </div>
                        </div>
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                      </div>
                    </div>
                    <div
                      className="text-[#6B7A99] h-[50px] self-stretch items-center flex mt-0 w-full"
                    >
                      <div
                        className="h-[50px] w-[110px] self-stretch items-center flex"
                      >
                        <p className="w-[59px] h-5 leading-5 text-xs">
                          Subscriber
                        </p>
                      </div>
                      <div
                        className="h-[50px] self-stretch flex-grow items-start flex ml-0 flex-1"
                      >
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#3361FF] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#3361FF] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#3361FF] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#3361FF] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#3361FF] h-[5px] rounded-br-[30px] rounded-tr-[30px] flex-1"
                           />
                        </div>
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                      </div>
                    </div>
                    <div
                      className="text-[#6B7A99] h-[50px] self-stretch items-center flex mt-0 w-full"
                    >
                      <div
                        className="h-[50px] w-[110px] self-stretch items-center flex"
                      >
                        <p className="w-[62px] h-5 leading-5 text-xs">
                          Contributor
                        </p>
                      </div>
                      <div
                        className="h-[50px] self-stretch flex-grow items-start flex ml-0 flex-1"
                      >
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#8833FF] h-[5px] flex-1"
                           />
                        </div>
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex ml-0 flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#8833FF] h-[5px] rounded-br-[30px] rounded-tr-[30px] flex-1"
                           />
                        </div>
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                      </div>
                    </div>
                    <div
                      className="text-[#6B7A99] h-[50px] self-stretch items-center flex mt-0 w-full"
                    >
                      <div
                        className="h-[50px] w-[110px] self-stretch items-center flex"
                      >
                        <p className="w-[37px] h-5 leading-5 text-xs">
                          Author
                        </p>
                      </div>
                      <div
                        className="h-[50px] self-stretch flex-grow items-start flex ml-0 flex-1"
                      >
                        <div
                          className="h-[50px] self-stretch flex-grow items-center flex flex-1"
                        >
                          <div
                            className="w-[35px] bg-[#2EE6CA] h-[5px] rounded-br-[30px] rounded-tr-[30px] flex-1"
                           />
                        </div>
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                        <div className="w-[35px] h-[50px] ml-0 flex-1" />
                      </div>
                    </div>
                    <div
                      className="text-[#ADB8CC] self-stretch flex-grow items-center flex mt-0 flex-1 w-full"
                    >
                      <div className="h-[30px] w-[110px]" />
                      <div
                        className="h-[30px] self-stretch flex-grow items-start flex ml-0 flex-1"
                      >
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            10
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            20
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            30
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            40
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            50
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            60
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            70
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            80
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="text-[10px] h-5 w-3 leading-5">
                            90
                          </p>
                        </div>
                        <div
                          className="h-[30px] self-stretch flex-grow items-center justify-center flex ml-0 flex-1"
                        >
                          <p className="w-[18px] text-[10px] h-5 leading-5">
                            100
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gap-[30px] flex-grow items-start flex-col flex flex-1"
            >
              <div
                className="rounded-[10px] drop-shadow-lg text-left self-stretch items-start flex-col flex bg-white w-full"
              >
                <div
                  className="text-[#6B7A99] h-[65px] self-stretch items-center justify-between flex w-full px-5"
                >
                  <p className="h-[25px] w-[79px] leading-[25px] text-[13px]">
                    Latest Events
                  </p>
                  <Icon53 className="h-[30px] w-[30px] ml-0" />
                </div>
                <div
                  className="pl-[25px] pt-[25px] self-stretch items-start flex-col flex mt-0 pr-10 pb-5 w-full"
                >
                  <div className="text-[#6B7A99] gap-[30px] items-start flex">
                    <div
                      className="h-[110px] self-stretch items-center flex-col flex gap-2.5"
                    >
                      <Button
                        type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE2"
                       />
                      <div
                        className="rounded-[10px] h-[50px] bg-[#F7F8FA] flex-1 w-0.5"
                       />
                    </div>
                    <div
                      className="pb-[25px] pt-[15px] items-start flex-col flex gap-5"
                    >
                      <div className="items-start flex gap-2.5">
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE1"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE2"
                         />
                      </div>
                      <div className="items-start flex gap-2.5 pl-2.5">
                        <p className="w-[117px] h-5 leading-5 text-xs">
                          About Page Company
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-[#7D8FB3] gap-[30px] items-start flex mt-0"
                  >
                    <div
                      className="h-[150px] self-stretch items-center flex-col flex gap-2.5"
                    >
                      <Button
                        type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE3"
                       />
                      <div
                        className="rounded-[10px] h-[90px] bg-[#F7F8FA] flex-1 w-0.5"
                       />
                    </div>
                    <div
                      className="pb-[25px] pt-[15px] items-start flex-col flex gap-5"
                    >
                      <div className="items-start flex gap-2.5">
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE3"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
                         />
                      </div>
                      <div className="items-start flex gap-2.5 pl-2.5">
                        <p className="h-[60px] w-[360px] leading-5 text-xs">
                          You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer …
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-[#6B7A99] gap-[30px] items-start flex mt-0"
                  >
                    <div
                      className="h-[110px] self-stretch items-center flex-col flex gap-2.5"
                    >
                      <Button
                        type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE4"
                       />
                      <div
                        className="rounded-[10px] h-[50px] bg-[#F7F8FA] flex-1 w-0.5"
                       />
                    </div>
                    <div
                      className="pb-[25px] pt-[15px] items-start flex-col flex gap-5"
                    >
                      <div className="items-start flex gap-2.5">
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE3"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
                         />
                      </div>
                      <div className="items-start flex gap-2.5 pl-2.5">
                        <p className="w-[121px] h-5 leading-5 text-xs">
                          Category «Templates»
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-[#6B7A99] gap-[30px] items-start flex mt-0"
                  >
                    <div
                      className="h-[110px] self-stretch items-center flex-col flex gap-2.5"
                    >
                      <Button
                        type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE5"
                       />
                      <div
                        className="rounded-[10px] h-[50px] bg-[#F7F8FA] flex-1 w-0.5"
                       />
                    </div>
                    <div
                      className="pb-[25px] pt-[15px] items-start flex-col flex gap-5"
                    >
                      <div className="items-start flex gap-2.5">
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE5"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
                         />
                      </div>
                      <div className="items-start flex gap-2.5 pl-2.5">
                        <p className="w-[129px] h-5 leading-5 text-xs">
                          New User Alberta Colon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="gap-[30px] items-start flex mt-0">
                    <div
                      className="h-[140px] self-stretch items-center flex-col flex gap-2.5"
                    >
                      <Button
                        type="ICON_DEFAULT_ROUNDED_LIGHT_TYPE6"
                       />
                    </div>
                    <div
                      className="pb-[5px] pt-[15px] items-start flex-col flex gap-5"
                    >
                      <div className="items-start flex gap-2.5">
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE5"
                         />
                        <Button
                          type="DEFAULT_EXTRA_SMALL_ROUNDED_LIGHT_TYPE4"
                         />
                      </div>
                      <div
                        className="items-start flex-col flex gap-2.5 pl-2.5"
                      >
                        <p
                          className="text-[#6B7A99] h-5 w-40 leading-5 text-xs"
                        >
                          Add New Post «Second Post»
                        </p>
                        <p
                          className="text-[#7D8FB3] w-[360px] h-10 leading-5 text-xs"
                        >
                          You might remember the Dell computer commercials in which a youth reports this exciting news to his friends...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-[10px] drop-shadow-lg h-[350px] self-stretch items-start flex-col flex bg-white w-full"
              >
                <div
                  className="text-[#4D5E80] h-[65px] text-left self-stretch items-center justify-between flex w-full px-5"
                >
                  <p className="h-[25px] w-[63px] leading-[25px] text-[13px]">
                    Site Speed
                  </p>
                  <Tab className="h-[65px] ml-0" type="TAB_TYPE2" />
                  <Icon53 className="h-[30px] w-[30px] ml-0" />
                </div>
                <div
                  className="pb-[55px] pt-[60px] pr-[50px] pl-[50px] text-center self-stretch flex-grow items-center flex-col flex mt-0 flex-1 w-full"
                >
                  <div className="self-stretch items-start flex gap-5 w-full">
                    <div
                      className="text-[#3361FF] rounded-[100px] border-[#3361FF80] bg-[#3361FF0D] h-[172px] w-[172px] items-center justify-center flex-col flex border-2 border-solid relative"
                    >
                      <div
                        className="gap-[5px] items-center justify-center flex-col flex"
                      >
                        <p
                          className="h-[30px] w-[42px] leading-[30px] text-2xl"
                        >
                          631
                        </p>
                        <p className="w-[17px] h-5 leading-5 text-xs">
                          mc
                        </p>
                      </div>
                      <Chart
                        className="h-[170px] w-[170px] mt-0 absolute top-0 left-0"
                       />
                    </div>
                    <div
                      className="flex-grow items-start flex-col flex gap-2.5 flex-1"
                    >
                      <div
                        className="self-stretch items-start flex gap-2.5 w-full"
                      >
                        <div
                          className="rounded-[10px] bg-[#3361FF0D] pb-[15px] pt-[15px] flex-grow items-start flex gap-2.5 h-20 flex-1"
                        >
                          <div
                            className="flex-grow items-center flex-col flex flex-1"
                          >
                            <p
                              className="h-[30px] w-[17px] text-[#3361FF] leading-[30px] text-sm"
                            >
                              75
                            </p>
                            <p
                              className="w-[27px] text-[#3361FFCC] text-[10px] h-5 mt-0 leading-5"
                            >
                              Grade
                            </p>
                          </div>
                        </div>
                        <div
                          className="rounded-[10px] bg-[#3361FF0D] pb-[15px] pt-[15px] flex-grow items-start flex gap-2.5 h-20 flex-1"
                        >
                          <div
                            className="flex-grow items-center flex-col flex flex-1"
                          >
                            <p
                              className="h-[30px] text-[#3361FF] leading-[30px] w-11 text-sm"
                            >
                              1.9 mb
                            </p>
                            <p
                              className="w-[45px] text-[#3361FFCC] text-[10px] h-5 mt-0 leading-5"
                            >
                              Page Size
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="self-stretch items-start flex gap-2.5 w-full"
                      >
                        <div
                          className="rounded-[10px] bg-[#3361FF0D] pb-[15px] pt-[15px] flex-grow items-start flex gap-2.5 h-20 flex-1"
                        >
                          <div
                            className="flex-grow items-center flex-col flex flex-1"
                          >
                            <p
                              className="h-[30px] text-[#3361FF] leading-[30px] w-12 text-sm"
                            >
                              631 mc
                            </p>
                            <p
                              className="text-[#3361FFCC] text-[10px] h-5 w-12 mt-0 leading-5"
                            >
                              Load Time
                            </p>
                          </div>
                        </div>
                        <div
                          className="rounded-[10px] bg-[#3361FF0D] pb-[15px] pt-[15px] flex-grow items-start flex gap-2.5 h-20 flex-1"
                        >
                          <div
                            className="flex-grow items-center flex-col flex flex-1"
                          >
                            <p
                              className="h-[30px] w-[17px] text-[#3361FF] leading-[30px] text-sm"
                            >
                              42
                            </p>
                            <p
                              className="w-[43px] text-[#3361FFCC] text-[10px] h-5 mt-0 leading-5"
                            >
                              Requests
                            </p>
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
      </div>
    </div>
  );
}

CMS1600.defaultProps = {
  className: "",
  style: {},
};

interface CMS1600Props {
  className: string;
  style: Object;
}


