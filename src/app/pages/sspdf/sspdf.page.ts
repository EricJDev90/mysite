import { Component, OnInit, inject, } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonItem, IonLabel, IonRow, IonCol, IonButton, IonCheckbox, IonToast, IonInput} from '@ionic/angular/standalone';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { DataModel } from 'src/app/types/globalTypes';
import PDFMerger from 'pdf-merger-js';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface PDFFile {
  title: string;
  data: Blob
}

@Component({
  selector: 'sspdf',
  templateUrl: 'sspdf.page.html',
  styleUrls: ['sspdf.page.scss'],
  standalone: true,
  imports: [
    IonItem, 
    IonFooter, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonLabel, 
    IonRow, 
    IonCol, 
    IonButton,
    IonCheckbox,
    ReactiveFormsModule,
    IonToast,
    IonInput]
})
export class SSPDFPage implements OnInit {
  private stateService = inject(GlobalStateService);
  data: DataModel | null = null;
  merger: PDFMerger = new PDFMerger();
  selectedFiles: string[] = [];
  files: PDFFile[] = [];
  acceptedFileTypes = ".pdf"
  isToastOpen: boolean = false;
  toastMessage = "A file with that name is already uploaded. Please rename and try again"
  formGroup: FormGroup = new FormGroup({
    fileName: new FormControl("", Validators.required)
  })

  ngOnInit() {
    this.stateService.data.subscribe(updates => this.data = updates)
  }

  addPDFFile(event: any) {
    for(const file of event.files) {
      if (file.name.endsWith('.pdf')) {
        //Dont add a file of the same name
        if (this.files.findIndex((item: PDFFile) => item.title == file.name) != -1) {
          console.log(this.data?.SSPDF.FileAlreadyExists)
          this.setOpen(true, this.data?.SSPDF.FileAlreadyExists ? this.data?.SSPDF.FileAlreadyExists : "Message Missing")
          continue;
        }
  
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Blob([e.target?.result as BlobPart]);
          console.log(reader.result)
          this.files.push({title: file.name, data: data});
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }

  async mergePDFs() {
    if (!this.formGroup.valid) {
      this.setOpen(true, this.data?.SSPDF.MissingName ? this.data.SSPDF.MissingName : "");
      return;
    }
    if (this.files.length > 1) {
      console.log("Merging files");

      for (const file of this.files) {
        await this.merger.add(file.data)
      }
  
      await this.merger.setMetadata({
        "producer": "EricWritesCode pdf merger",
        "title": this.formGroup.value.fileName
      })
  
      await this.merger.save(this.formGroup.value.fileName);
      this.setOpen(true, "Successfully merged PDFs!");
    } else {
      this.setOpen(true, this.data?.SSPDF.NeedMoreFiles ? this.data.SSPDF.NeedMoreFiles : "");
    }
  }

  removeSelected() {
    this.selectedFiles.forEach((fileName: string) => {
      let fileIndex = this.files.findIndex(element => element.title == fileName);
      if (fileIndex != -1) {
        this.files.splice(fileIndex, 1)
      }
    });
    this.selectedFiles = [];
  }

  checkboxToggled(event:any): void {
    if (event.checked) {
      //Switching to false, remove from selected list
      this.selectedFiles.splice(event.textContent)
    } else {
      //Add to the list
      this.selectedFiles.push(event.textContent);
    }
  }

  reset(): void {
    this.merger?.reset();
    this.files = []
    this.formGroup.reset();
  }

  setOpen(isOpen: boolean, message: string): void {
    this.toastMessage = message
    this.isToastOpen = isOpen;
  }
}
