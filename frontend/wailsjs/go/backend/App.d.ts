// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {services} from '../models';
import {backend} from '../models';

export function AlgoFilter(arg1:services.AlgoFilterParam):Promise<services.AlgoFilterResp>;

export function AlgoProduct(arg1:services.AlgoFilterParam):Promise<services.AlgoProductResp>;

export function ArticleDetail(arg1:number,arg2:string):Promise<string>;

export function ArticleList(arg1:string,arg2:string,arg3:number,arg4:number):Promise<services.ArticleList>;

export function CheckLogin(arg1:string,arg2:string):Promise<backend.LoginResult>;

export function CourseCategory():Promise<Array<services.CourseCategory>>;

export function CourseDownload(arg1:number,arg2:number,arg3:number,arg4:string):Promise<void>;

export function CourseInfo(arg1:string):Promise<services.CourseInfo>;

export function CourseList(arg1:string,arg2:string,arg3:number,arg4:number):Promise<services.CourseList>;

export function EbookCommentList(arg1:string,arg2:number,arg3:number):Promise<services.EbookCommentList>;

export function EbookDownload(arg1:number,arg2:number,arg3:string):Promise<void>;

export function EbookInfo(arg1:string):Promise<services.EbookDetail>;

export function EbookShelfAdd(arg1:Array<string>):Promise<services.EbookShelfAddResp>;

export function EbookUserInfo():Promise<services.EbookVIPInfo>;

export function GetHomeInitialState():Promise<services.HomeInitState>;

export function GetQrcode():Promise<backend.QrCodeResp>;

export function GetVolcPlayAuthToken(arg1:string,arg2:string):Promise<services.MediaVolc>;

export function GetVolcPlayInfo(arg1:string):Promise<services.VodPlayInfoResp>;

export function Logout():Promise<void>;

export function NotesTimeline(arg1:string):Promise<services.NotesTimeline>;

export function OdobDownload(arg1:number,arg2:number,arg3:services.Course):Promise<void>;

export function OdobUserInfo():Promise<services.OdobVip>;

export function OpenDirectoryDialog(arg1:string):Promise<string>;

export function SearchHot():Promise<services.SearchTot>;

export function SetDir(arg1:Array<string>):Promise<void>;

export function SunflowerLabelContent(arg1:string,arg2:number,arg3:number,arg4:number):Promise<services.SunflowerContent>;

export function SunflowerLabelList(arg1:number):Promise<services.SunflowerLabelList>;

export function SunflowerResourceList():Promise<services.SunflowerResourceList>;

export function TopicAll(arg1:number,arg2:number):Promise<services.TopicAll>;

export function TopicNoteDetail(arg1:string):Promise<services.TopicDetail>;

export function TopicNotesList(arg1:string,arg2:boolean,arg3:number,arg4:number):Promise<services.NotesList>;

export function UserInfo():Promise<services.User>;
