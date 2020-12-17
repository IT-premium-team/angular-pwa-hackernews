import { Injectable } from "@angular/core";
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  public promptEvent: any;

  private confirmationText = `
    New version of the app is available. Do you want to load it?
  `;

  private reloadOnConfirm(): void {
    if (confirm(this.confirmationText)) {
      location.reload();
    }
  }

  private showA2HSDialog(): void {
    window.addEventListener('beforeinstallprompt', (event: any) => this.promptEvent = event);
  }

  constructor(
    private swUpdate: SwUpdate,
  ) {
    this.showA2HSDialog();

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available
        .subscribe(() => this.reloadOnConfirm());
    }
  }

}