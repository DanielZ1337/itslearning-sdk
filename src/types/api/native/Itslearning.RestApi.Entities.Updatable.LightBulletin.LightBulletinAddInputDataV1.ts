import type { ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinInputImageDataV1 } from "./Itslearning.RestApi.Entities.Updatable.LightBulletin.LightBulletinInputImageDataV1";

export type ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1 =
  {
    CourseId: number;
    Text: string;
    ElementIdsToAttach: Array<string>;
    AttachedImages: Array<ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinInputImageDataV1>;
    AllowComments: boolean;
    ActiveFromDate: Date;
    ActiveToDate: Date;
  };
