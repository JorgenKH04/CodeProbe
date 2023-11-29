import {
  Card,
  CardImg,
  CardInfo,
  CardBadge,
  CardBadges,
  CardName,
  CardShare,
} from "@/components/Card";
import { Searchbar } from "@/components/Searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Searchbar />
      <Card>
        <CardImg>
          <img
            src="https://avatars.githubusercontent.com/u/30192333?v=4"
            alt="user"
            className="h-[6em] rounded-md"
          />
        </CardImg>
        <CardInfo>
          <CardName>rondDev</CardName>
          <CardBadges>
            <CardBadge>11 followers</CardBadge>
            <CardBadge>11 following</CardBadge>
            <CardBadge>8 repos</CardBadge>
          </CardBadges>
        </CardInfo>
        <CardShare>
          <a href={"https://google.com"}>share</a>
        </CardShare>
      </Card>
    </main>
  );
}
