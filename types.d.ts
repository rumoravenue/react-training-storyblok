import { ISbRichtext } from "@storyblok/react";

export interface Assets{
 filename?:string;
 alt?:string;
 copyRight?:string;
 id?:number
 name?:string;
 title?:string

}
export type TextAlign = 'left' | 'center' | 'right';

export type Auther ={
 name:string
 bio:ISbRichtext
}
