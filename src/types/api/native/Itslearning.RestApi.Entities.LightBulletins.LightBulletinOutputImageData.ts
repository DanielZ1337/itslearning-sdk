import type { ItslearningRestApiEntitiesLocalizedText } from "./Itslearning.RestApi.Entities.LocalizedText";
import type { ItslearningRestApiEntitiesUpdatableFileDataV1 } from "./Itslearning.RestApi.Entities.Updatable.FileDataV1";

export type ItslearningRestApiEntitiesLightBulletinsLightBulletinOutputImageData =
  {
    IsError: boolean;
    ErrorMessage: ItslearningRestApiEntitiesLocalizedText;
    PreviewFile: ItslearningRestApiEntitiesUpdatableFileDataV1;
    OriginalFile: ItslearningRestApiEntitiesUpdatableFileDataV1;
  };
