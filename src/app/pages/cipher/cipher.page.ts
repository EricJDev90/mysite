import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonButton, IonItem, IonTextarea, IonRow, IonCol, IonToast } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { CipherKeyModel, CipherPageData } from 'src/app/types/globalTypes';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.page.html',
  imports: [IonContent, IonButton, CommonModule, FormsModule, IonItem, IonTextarea, IonRow, IonCol, IonToast]
})
export class CipherPage  implements OnInit {
  private stateService = inject(GlobalStateService);
  private helperService = inject(HelperService);
  cipherPageData: CipherPageData | undefined;
  cipherKey: CipherKeyModel | null = null;
  outputMessage: string = "";
  inputString: string = "";
  isToastOpen: boolean = false;
  toastMessage = "A file with that name is already uploaded. Please rename and try again"

  ngOnInit() {
    this.stateService.data.subscribe(updates => this.cipherPageData = updates?.CipherPageData)
    this.stateService.cipherKey.subscribe(cipherKey => this.cipherKey = cipherKey)
  }

  encode() {
    if (!this.validateInput(this.inputString.toLowerCase())) {
      this.setOpen(true, this.cipherPageData?.ErrorMessageEncode ? this.cipherPageData.ErrorMessageEncode : "")
      return;
    }

    if (this.cipherKey) {
      this.outputMessage = Array.from(this.inputString.toLowerCase())
        .map(char => 
          this.cipherKey![char] !== undefined ? this.cipherKey![char] : ""
        ).join("");
    }
  }

  decode() {
    if (!this.validateInput(this.inputString.toLowerCase(), true)) {
      this.setOpen(true, this.cipherPageData?.ErrorMessageDecode ? this.cipherPageData.ErrorMessageDecode : "")
      return;
    }

    //Reset output
    this.outputMessage = "";

    //Attempt decode
    try {
      let i = 0;

      //Create an array of split values so we can then translate them
      while (i < this.inputString.length) {
        // Check if the next character (if it exists) is '2'
        if (i + 3 <= this.inputString.length && this.inputString[i] === '2') {
          // If next chunk would start with '2', take only 3 characters and convert
          this.outputMessage += this.helperService.getKeysByValue(this.cipherKey!, this.inputString.substring(i, i + 3));
          i += 3;
        } else {  
          // Otherwise take 5 characters (or whatever is left)
          const end = Math.min(i + 5, this.inputString.length);
          this.outputMessage += this.helperService.getKeysByValue(this.cipherKey!, this.inputString.substring(i, end));
          i += 5;
        }
      }
    } catch {
      console.log("Error");
    }
  }

  validateInput(input: string, isDecode?: boolean): boolean {
    if (input.length == 0) return false;
    const regex = isDecode ? /^[012]+$/ : /^[a-z0-9 ]+$/;
    return regex.test(input);
  }

  setOpen(isOpen: boolean, message: string): void {
    this.toastMessage = message
    this.isToastOpen = isOpen;
  }
}
