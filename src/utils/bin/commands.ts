// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
       ...              s                                                                                                        
   .x888888hx    :     :8                                                                                                        
  d88888888888hxx     .88                   .u    .                                ..                  .u    .                   
 8" ... `"*8888%`    :888ooo       u      .d88B :@8c       uL           u        .@88i        .u     .d88B :@8c                  
!  "   ` .xnxx.    -*8888888    us888u.  ="8888f8888r  .ue888Nc..    us888u.    ""%888>    ud8888.  ="8888f8888r                 
X X   .H8888888%:    8888    .@88 "8888"   4888>'88"  d88E`"888E` .@88 "8888"     '88%   :888'8888.   4888>'88"                  
X 'hn8888888*"   >   8888    9888  9888    4888> '    888E  888E  9888  9888    ..dILr~` d888 '88%"   4888> '                    
X: `*88888%`     !   8888    9888  9888    4888>      888E  888E  9888  9888   '".-%88b  8888.+"      4888>                      
'8h.. ``     ..x8>  .8888Lu= 9888  9888   .d888L .+   888E  888E  9888  9888    @  '888k 8888L       .d888L .+                   
 `88888888888888f   ^%888*   9888  9888   ^"8888*"    888& .888E  9888  9888   8F   8888 '8888c. .+  ^"8888*"                    
  '%8888888888*"      'Y"    "888*""888"     "Y"      *888" 888&  "888*""888" '8    8888  "88888%       "Y"                      
     ^"****""`                ^Y"   ^Y'                `"   "888E  ^Y"   ^Y'  '8    888F    "YP'                                 
                                                      .dWi   `88E              %k  <88F                                          
                                                      4888~  J8%                "+:*%`                                           
                                                       ^"===*"`                                                                  
    ....      ..                                                                s                                                
  +^""888h. ~"888h                               ..                            :8                          ..                    
 8X.  ?8888X  8888f     .u    .          u.     888>                          .88              uL   ..    @L               ..    
'888x  8888X  8888~   .d88B :@8c   ...ue888b    "8P        .u          .     :888ooo         .@88b  @88R 9888i   .dL     .@88i   
'88888 8888X   "88x: ="8888f8888r  888R Y888r    .      ud8888.   .udR88N  -*8888888        '"Y888k/"*P  `Y888k:*888.   ""%888>  
 `8888 8888X  X88x.    4888>'88"   888R I888>  u888u. :888'8888. <888'888k   8888              Y888L       888E  888I     '88%   
   `*` 8888X '88888X   4888> '     888R I888> `'888E  d888 '88%" 9888 'Y"    8888               8888       888E  888I   ..dILr~` 
  ~`...8888X  "88888   4888>       888R I888>   888E  8888.+"    9888        8888               `888N      888E  888I  '".-%88b  
   x8888888X.   `%8"  .d888L .+   u8888cJ888    888E  8888L      9888       .8888Lu=    .    .u./"888&     888E  888I   @  '888k 
  '%"*8888888h.   "   ^"8888*"     "*888*P"     888E  '8888c. .+ ?8888u../  ^%888*    .@8c  d888" Y888*"  x888N><888'  8F   8888 
  ~    888888888!`       "Y"         'Y"        888E   "88888%    "8888P'     'Y"    '%888" ` "Y   Y"      "88"  888  '8    8888 
       X888^"""                                 888E     "YP'       "P'                ^*                        88F  '8    888F 
       `88f                                     888E                                                            98"    %k  <88F  
        88                                      888P                                                          ./"       "+:*%`   
        ""                                    .J88" "                                                        ~`                  
                                                                                              
                                                                          

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
