import { Arg, FieldResolver, Int, Query, Resolver, Root } from 'type-graphql';
import { Cut } from '../entities/Cut';
import { Film } from '../entities/Film';
import ghibliData from '../data/ghibli';

@Resolver(Cut)
export class CutResolver {
  // cuts 하고 cut 하고 다르니 구분 잘하기
  @Query(() => [Cut])
  cuts(@Arg('filmId', () => Int) filmId: Film['id']): Cut[] {
    return ghibliData.cuts.filter((x) => x.filmId === filmId);
  }

  @Query(() => Cut, { nullable: true })
  cut(@Arg('cutId', () => Int) cutId: number): Cut | undefined {
    return ghibliData.cuts.find((x) => x.id === cutId);
  }

  @FieldResolver(() => Film, { nullable: true })
  film(@Root() cut: Cut): Film | undefined {
    return ghibliData.films.find((film) => film.id === cut.filmId);
  }
}
