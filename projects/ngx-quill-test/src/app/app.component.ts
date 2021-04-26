import { Component } from '@angular/core';
import { QuillModules } from '@ngx-quill';
import * as hljs from 'highlight.js';


hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
})

interface Quill {
    getModule(moduleName: string);
}
  
interface BetterTableModule {
    insertTable(rows: number, columns: number): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public quill: Quill;

    title = 'ngx-quill-test';

    placeholder = 'placeholder';
    modules: QuillModules = {
        table: true,
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            ['blockquote', 'code-block'],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['clean']
        ],
    };
    maxLength=250


    private get tableModule(): BetterTableModule {
        return this.quill.getModule("better-table");
    }

    private addNewTable(): void {
        this.tableModule.insertTable(3, 3);
    }

    handleEditorCreated(event: Quill): void {
        console.log('handleEditorCreated');
        this.quill = event;

        // Example on how to add new table to editor
        /*
        this.addNewTable();
        */
    }
    handleValueChange(event) {
        console.log('handleValueChanged', event);
    }
    handleFocus() {
        console.log('handleFocus');
    }
    handleBlur() {
        console.log('handleBlur');
    }
    handleEnter(event) {
        console.log('handleEnter', event);
    }
    handleTab(event) {
        console.log(event);
    }
}
