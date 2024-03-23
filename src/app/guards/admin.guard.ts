import { CanActivateChildFn } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

import { inject } from '@angular/core';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const tokenStorage = inject(TokenStorageService);
  if (!tokenStorage.hasRole('ADMIN')) {
    console.log("vous n'êtes pas autorisé à accéder à cette foncytionnalité");
    return false;
  } else return true;
};
