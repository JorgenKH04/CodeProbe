/* eslint-disable @next/next/no-img-element */
import { Card, CardBadge, CardBadges, CardImg, CardInfo, CardName, CardShare } from './Card';

export function repoCard(name: string, stars: number, forks: number) {
  return (
    <Card>
      <CardImg>
        <img src={`/api/icons/${name}`} alt={name} />
      </CardImg>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardBadges>
          <CardBadge>{stars} stars</CardBadge>
          <CardBadge>{forks} forks</CardBadge>
        </CardBadges>
      </CardInfo>
      <CardShare>
        <a href={`https://github.com/${name}`}>share</a>
      </CardShare>
    </Card>
  );
  // TODO: change the a tag to a copy to clipboard function
}
