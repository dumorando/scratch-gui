import ScratchBlocks from 'scratch-blocks';
import {defaultColors} from './themes';
import blockstack from '!raw-loader!./Funnyblobkstacks.txt';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

function Getfollowers() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://scratchfollowersapi.replit.app/?user=dumorando', false);
    request.send(null);
    return JSON.parse(request.responseText);
}

const followers = Getfollowers();

let thing = `
<label text="Shout out to"></label>
`

followers.forEach(item => {
    thing += `
    <block type="motion_goto">
            <value name="TO">
                <shadow type="text">
                <field name="TEXT">${item}</field>
                </shadow>
            </value>
        </block>
    `
});

console.log(thing);

/* eslint-disable no-unused-vars */
const motion = function (isInitialSetup, isStage, targetId, colors) {
    const stageSelected = ScratchBlocks.ScratchMsgs.translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
    ${thing}
        ${isStage ? `
        <label text="${stageSelected}"></label>
        ` : `
        <block type="event_whenflagclicked" id="cASk[{N%O1^|V}0N0gBM" x="355" y="312">
        <next>
        <shadow type="motion_movesteps" id="Z!)z)A[lfz8-u)7;5iw9">
         <value name="STEPS">
        <shadow type="math_number" id="W@{v[lyelnmDw{N3NPY~">
        <field name="NUM">10</field>
        </shadow>
        </value>
        </shadow>
        </next>
        </block>
        <block type="motion_turnright">
            <value name="DEGREES">
                <shadow type="operator_round"></shadow>
            </value>
        </block>
        <block type="motion_turnleft">
            <value name="DEGREES">
                <shadow type="text"></shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_goto">
            <value name="TO">
                <shadow type="math_number">
                </shadow>
            </value>
        </block>
        <block type="motion_gotoxy">
            <value name="X">
                <shadow id="movex" type="motion_glideto_menu"></shadow>
            </value>
            <value name="Y">
                <shadow id="movey" type="motion_glideto_menu"></shadow>
            </value>
        </block>
        <block type="motion_glideto" id="motion_glideto">
            <value name="SECS">
                <shadow type="sensing_mousedown">
                    <field name="NUM">:OHMYGOD:</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="motion_glideto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_glidesecstoxy">
            <value name="SECS">
            <shadow type="operator_join" x="-254" y="387">
             <value name="STRING1">
              <shadow type="text" id="5.;1jxl=InG2{5C0gQa7">
               <field name="TEXT">apple </field>
              </shadow>
             </value>
             <value name="STRING2">
              <shadow type="text" id="R-p$A}zXOqpfKJxj4w1e">
               <field name="TEXT">banana</field>
              </shadow>
             </value>
            </shadow>
            </value>
            <value name="X">
            <shadow type="operator_join" x="-254" y="387">
             <value name="STRING1">
              <shadow type="text" id="5.;1jxl=InG2{5C0gQa7">
               <field name="TEXT">apple </field>
              </shadow>
             </value>
             <value name="STRING2">
              <shadow type="text" id="R-p$A}zXOqpfKJxj4w1e">
               <field name="TEXT">banana</field>
              </shadow>
             </value>
            </shadow>
            </value>
            <value name="Y">
            <shadow type="operator_join"  x="-254" y="387">
             <value name="STRING1">
              <shadow type="text" id="5.;1jxl=InG2{5C0gQa7">
               <field name="TEXT">apple </field>
              </shadow>
             </value>
             <value name="STRING2">
              <shadow type="text" id="R-p$A}zXOqpfKJxj4w1e">
               <field name="TEXT">banana</field>
              </shadow>
             </value>
            </shadow>
            </value>
        </block>
        ${blockSeparator}
        ${blockstack}
        <block type="motion_pointindirection">
            <value name="DIRECTION">
                <shadow type="text">
                    <field name="NUM">90</field>
                </shadow>
            </value>
        </block>
        <block type="motion_pointtowards">
            <value name="TOWARDS">
            <shadow type="operator_not" id="NUdtZ;Sz@14_)s}0N4u}" x="-109" y="392">
             <value name="OPERAND">
              <shadow type="operator_equals" id="t)iOM7zTa}niAn?||K,f">
               <value name="OPERAND1">
                <shadow type="text" id="~*{oavehpq1LfK3n,jnG">
                 <field name="TEXT">
                 </field>
                </shadow>
                <shadow type="math_number" id="lx]4|PANxqGuy^*0U|If">
                 <field name="NUM">0</field>
                </shadow>
               </value>
               <value name="OPERAND2">
                <shadow type="math_number" id="zqSwN?I;rv#s-3ltNH!">
                 <field name="NUM">oh my godders     </field>
                </shadow>
               </value>
              </shadow>
             </value>
            </shadow>
            </value>
        </block>
        ${blockSeparator}
        <label text="Ok"></label>

        <block type="motion_changexby">
            <value name="DX">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_setx">
            <value name="X">
                <shadow id="setx" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_changeyby">
            <value name="DY">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_sety">
            <value name="Y">
                <shadow id="sety" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
${'<block type="motion_ifonedgebounce"/>'.repeat(500)}
        ${blockSeparator}
        <block type="motion_setrotationstyle"/>
        ${blockSeparator}
        <block id="${targetId}_xposition" type="motion_xposition"/>
        <block id="${targetId}_yposition" type="motion_yposition"/>
        <block id="${targetId}_direction" type="motion_direction"/>`}
        ${categorySeparator}
    </category>
    `;
};

const xmlEscape = function (unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        }
    });
};

const looks = function (isInitialSetup, isStage, targetId, costumeName, backdropName, colors) {
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="${colors.primary}" secondaryColour="${colors.tertiary}">${thing}
        ${isStage ? '' : `
        <block type="looks_sayforsecs">
            <value name="MESSAGE">
            <shadow type="operator_add" id="+4(9COVm*v,C@zwldZqE" x="-206" y="-354">
             <value name="NUM1">
              <shadow type="math_number" id="oVOdhK]KIi);A%X[5u;i">
               <field name="NUM">
               </field>
              </shadow>
             </value>
             <value name="NUM2">
              <shadow type="math_number" id="?MR(kPE7R/EmWZ1HsjIv">
               <field name="NUM">
               </field>
              </shadow>
             </value>
            </shadow>
            </value>
            <value name="SECS">
                <shadow type="text">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_say"></block>
        <block type="looks_thinkforsecs"></block>
        <block type="looks_think">
            <value name="MESSAGE">
            <shadow type="operator_mathop" id="D%Q%8+ir@!k$%Vdvn!o=" x="-841" y="-464">
             <field name="OPERATOR">User id</field>
             <value name="NUM">
              <shadow type="text" id="t}b3^jF3!#w[r9|t]T,L">
               <field name="TEXT">dumorando   </field>
              </shadow>
             </value>
            </shadow>
            </value>
        </block>
        ${blockSeparator}
        `}
        ${isStage ? `
            <block type="looks_switchbackdropto">
                <value name="BACKDROP">
                <shadow type="sound_sounds_menu">
                <field name="SOUND_MENU">Meow</field>
            </shadow>
                </value>
            </block>
            <block type="looks_switchbackdroptoandwait">
                <value name="BACKDROP">
                <shadow type="sound_sounds_menu">
                <field name="SOUND_MENU">Meow</field>
            </shadow>
                </value>
            </block>
            <block type="motion_ifonedgebounce"/>
        ` : `
        <block type="motion_ifonedgebounce"/>
            <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
                <value name="COSTUME">
                <shadow type="sound_sounds_menu">
                <field name="SOUND_MENU">Meow</field>
            </shadow>
                </value>
            </block>
            <block type="looks_nextcostume"/>
            <block type="looks_switchbackdropto">
                <value name="BACKDROP">
                <shadow type="event_broadcast_menu"></shadow>
                </value>
            </block>
            <block type="looks_nextbackdrop"/>
            ${blockSeparator}
            <block type="looks_changesizeby">
                <value name="CHANGE">
                <shadow type="operator_gt" id="o$(5LN-i=#Zz;sW#*u2@" x="-907" y="-17">
                 <value name="OPERAND1">
                  <shadow type="text" id="~GPq)9|D|}_x{sEP[k$n">
                   <field name="TEXT">A lot</field>
                  </shadow>
                 </value>
                 <value name="OPERAND2">
                  <shadow type="sensing_mousedown" id="g,])LysT^pwXAg,T+(n@">
                   <field name="TEXT">50</field>
                  </shadow>
                 </value>
                </shadow>
                </value>
            </block>
            <block type="looks_setsizeto">
                <value name="SIZE">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
        `}
        ${blockSeparator}
        <block type="looks_changeeffectby">
            <value name="CHANGE">
                <shadow type="looks_size">
                    <field name="NUM">25</field>
                </shadow>
            </value>
        </block>
        <block type="looks_seteffectto">
            <value name="VALUE">
                <shadow type="${targetId}_size">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="looks_cleargraphiceffects"/>
        ${blockSeparator}
        ${isStage ? '' : `
            <block type="looks_show"/>
            <block type="looks_hide"/>
        ${blockSeparator}
            <block type="looks_gotofrontback"/>
            <block type="looks_goforwardbackwardlayers">
                <value name="NUM">
                    <shadow type="${targetId}_size">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
        `}
        ${isStage ? `
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
        ` : `
            <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
            <block id="${targetId}_size" type="looks_size"/>
            ${`<block id="${targetId}_size" type="looks_size"/>`.repeat(300)}
        `}
        ${categorySeparator}
    </category>
    `;
};

const sound = function (isInitialSetup, isStage, targetId, soundName, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="${colors.primary}" secondaryColour="${colors.tertiary}">${thing}${thing}
        <block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">${soundName}</field>
                </shadow>
            </value>
        </block>
        <block id="${targetId}_sound_play" type="sound_play">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu">
                    <field name="SOUND_MENU">Meow</field>
                </shadow>
            </value>
        </block>
        <block type="sound_stopallsounds"/>
        ${blockSeparator}
        <block type="sound_changeeffectby">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="sound_cleareffects"/>
        ${blockSeparator}
        <block type="sound_changevolumeby">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">-10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_setvolumeto">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block id="${targetId}_volume" type="sound_volume"/>
        ${categorySeparator}
    </category>
    `;
};

const events = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        <block type="event_whenflagclicked"/>
        <block type="event_whenkeypressed">${thing}
        </block>
        ${isStage ? `
            <block type="event_whenstageclicked"/>
        ` : `
            <block type="event_whenthisspriteclicked"/>
        `}
        <block type="event_whenbackdropswitchesto">
        </block>
        ${blockSeparator}
        <block type="event_whengreaterthan">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">ok</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_join" id="v9yoHYC=/N_jS)~oD[{G" x="-978" y="-737">
 <value name="STRING1">
  <shadow type="text" id="}.v|-{[JCQNL3Z|gTD3Q">
   <field name="TEXT">apple </field>
  </shadow>
  <shadow type="operator_join" id="VRhLGErAs.Kj1J5Rz=81">
   <value name="STRING1">
    <shadow type="text" id="p@0bNEZj}vdWC#qHB;!X">
     <field name="TEXT">apple </field>
    </shadow>
    <shadow type="operator_join" id="OP,w.g.K(Uz2]fwhat the scalop!U9_7E">
     <value name="STRING1">
      <shadow type="text" id="_xzRKQYKRY*ks#2mK|I0">
       <field name="TEXT">apple </field>
      </shadow>
      <shadow type="operator_join" id="FO-u48,/~hz|H_y?4sQV">
       <value name="STRING1">
        <shadow type="text" id="NM(what the scalop!what the scalop!Xxorb6vBI_)ezs.">
         <field name="TEXT">apple </field>
        </shadow>
        <shadow type="operator_join" id="_w+HP?obN6Pccy7r@W)8">
         <value name="STRING1">
          <shadow type="text" id=";vtu^~~)De/g6K2Xv]k}">
           <field name="TEXT">apple </field>
          </shadow>
          <shadow type="operator_join" id=";pNUGOg%n.4jaY?QK=|P">
           <value name="STRING1">
            <shadow type="text" id="Hq?tDIM_v]VPekbO,J/R">
             <field name="TEXT">apple </field>
            </shadow>
            <shadow type="operator_join" id="$K$pZ)Gn8kK{gxEZ_2@^">
             <value name="STRING1">
              <shadow type="text" id="RXRtuI}^soq@W{1MniB*">
               <field name="TEXT">apple </field>
              </shadow>
              <shadow type="operator_join" id="u=/rCxZ6tX$?ifI#+55Z">
               <value name="STRING1">
                <shadow type="text" id="DAYK~ub3DIpeJH*z%sP|">
                 <field name="TEXT">apple </field>
                </shadow>
                <shadow type="operator_join" id="DTbFF8bCOCmAKK(1]7-_">
                 <value name="STRING1">
                  <shadow type="text" id="VKYXK#!pxmnf7FL2jkHs">
                   <field name="TEXT">apple </field>
                  </shadow>
                  <shadow type="operator_join" id="Fh6=#.dNLS#TLWJMd[wU">
                   <value name="STRING1">
                    <shadow type="text" id="[j[}Uz$/C-/.E@kjV_u^">
                     <field name="TEXT">apple </field>
                    </shadow>
                    <shadow type="operator_join" id="c3u6[16e+hF{Vro+JNeb">
                     <value name="STRING1">
                      <shadow type="text" id="|4Se+ZzbXdwhat the scalop!1JSa5Srv/">
                       <field name="TEXT">apple </field>
                      </shadow>
                      <shadow type="operator_join" id="9Zv-G#:}1uvU3ml={Ch1">
                       <value name="STRING1">
                        <shadow type="text" id="v]rYvg-VXk{s[fo2oTNJ">
                         <field name="TEXT">apple </field>
                        </shadow>
                        <shadow type="operator_join" id="+q1.H?P8Q=U(fwhat the scalop!)Qo)G1">
                         <value name="STRING1">
                          <shadow type="text" id="fiK~y2Y53hP8If$O2ZZb">
                           <field name="TEXT">apple </field>
                          </shadow>
                          <shadow type="operator_join" id="G?6roBsxa*sQVc_W:ht[">
                           <value name="STRING1">
                            <shadow type="text" id="gVv-,lkV*;|M]8DZfe@7">
                             <field name="TEXT">apple </field>
                            </shadow>
                            <shadow type="operator_join" id=";^_nU#g$d]$V65f.27nH">
                             <value name="STRING1">
                              <shadow type="text" id="+Q(_LnEtpQ{i(xoytB{6">
                               <field name="TEXT">apple </field>
                              </shadow>
                              <shadow type="operator_join" id="fPJ3fjUl.)F}m7lcy0((">
                               <value name="STRING1">
                                <shadow type="text" id="{/XH:7YS^)KQ~what the scalop!Stkp!r">
                                 <field name="TEXT">apple </field>
                                </shadow>
                               </value>
                               <value name="STRING2">
                                <shadow type="text" id="Ok4_N^]R0@WT!}z[s|O]">
                                 <field name="TEXT">banana</field>
                                </shadow>
                               </value>
                              </shadow>
                             </value>
                             <value name="STRING2">
                              <shadow type="text" id="!5kcV98VJfu/Pp}=?d)l">
                               <field name="TEXT">banana</field>
                              </shadow>
                             </value>
                            </shadow>
                           </value>
                           <value name="STRING2">
                            <shadow type="text" id=":A?:p}BxcaBuy2CPchWg">
                             <field name="TEXT">banana</field>
                            </shadow>
                           </value>
                          </shadow>
                         </value>
                         <value name="STRING2">
                          <shadow type="text" id="-fN*:UDD=0.F~c}Bj=$b">
                           <field name="TEXT">banana</field>
                          </shadow>
                         </value>
                        </shadow>
                       </value>
                       <value name="STRING2">
                        <shadow type="text" id="3.Y6s$WYH2Oa:JEo:o7f">
                         <field name="TEXT">banana</field>
                        </shadow>
                       </value>
                      </shadow>
                     </value>
                     <value name="STRING2">
                      <shadow type="text" id="FX^=FHOdG4vrxJ[U-hFb">
                       <field name="TEXT">banana</field>
                      </shadow>
                     </value>
                    </shadow>
                   </value>
                   <value name="STRING2">
                    <shadow type="text" id="I4y4S,_*CbFBTa9NAr/O">
                     <field name="TEXT">banana</field>
                    </shadow>
                   </value>
                  </shadow>
                 </value>
                 <value name="STRING2">
                  <shadow type="text" id="RnmIs:?%97vfO1+8[K1_">
                   <field name="TEXT">banana</field>
                  </shadow>
                 </value>
                </shadow>
               </value>
               <value name="STRING2">
                <shadow type="text" id="J6_d3U-V,fBa^5gqWq5h">
                 <field name="TEXT">banana</field>
                </shadow>
               </value>
              </shadow>
             </value>
             <value name="STRING2">
              <shadow type="text" id=",V,$what the scalop!]Wtyw[Krgn7_j]w">
               <field name="TEXT">banana</field>
              </shadow>
             </value>
            </shadow>
           </value>
           <value name="STRING2">
            <shadow type="text" id="%P)oXkDtr:b6bL#LI|$i">
             <field name="TEXT">banana</field>
            </shadow>
           </value>
          </shadow>
         </value>
         <value name="STRING2">
          <shadow type="text" id="what the scalop!]tSqAz(E2!7PMC!/NUb">
           <field name="TEXT">banana</field>
          </shadow>
         </value>
        </shadow>
       </value>
       <value name="STRING2">
        <shadow type="text" id="]iFTcJCjx8P3jvlL4p7=">
         <field name="TEXT">banana</field>
        </shadow>
       </value>
      </shadow>
     </value>
     <value name="STRING2">
      <shadow type="text" id="/X(j}CIvY!Hux*3F$wk%">
       <field name="TEXT">banana</field>
      </shadow>
     </value>
    </shadow>
   </value>
   <value name="STRING2">
    <shadow type="text" id="W$w}.e%wh!$*h1?C%!Cu">
     <field name="TEXT">banana</field>
    </shadow>
   </value>
  </shadow>
 </value>
 <value name="STRING2">
  <shadow type="text" id="Jo-cnSpBcb!+]%kGqb6R">
   <field name="TEXT">banana</field>
  </shadow>
 </value>
</block>
        <block type="event_whenbroadcastreceived">
        </block>
        <block type="event_broadcast">
            <value name="BROADCAST_INPUT">
                <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        <block type="event_broadcastandwait">
            <value name="BROADCAST_INPUT">
              <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const control = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category
        name="%{BKY_CATEGORY_CONTROL}"
        id="control"
        colour="${colors.primary}"
        secondaryColour="${colors.tertiary}">
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>${thing}
        ${blockSeparator}
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block id="forever" type="control_forever"/>
        ${blockSeparator}
        <block type="control_if"/>
        <block type="control_if_else"/>
        <block id="wait_until" type="control_wait_until"/>
        <block id="repeat_until" type="control_repeat_until"/>
        ${blockSeparator}
        <block type="control_stop"/>
        ${blockSeparator}
        ${isStage ? `
            <block type="control_create_clone_of">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
        ` : `
            <block type="control_start_as_clone"/>
            <block type="control_create_clone_of">
                <value name="CLONE_OPTION">
                    <shadow type="control_create_clone_of_menu"/>
                </value>
            </block>
            <block type="control_delete_this_clone"/>
        `}
        ${categorySeparator}
    </category>
    `;
};

const sensing = function (isInitialSetup, isStage, targetId, colors) {
    const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category
        name="%{BKY_CATEGORY_SENSING}"
        id="sensing"
        colour="${colors.primary}"
        secondaryColour="${colors.tertiary}">
        <block></block>
        ${'<block type="sensing_mousedown"></block>'.repeat(20)}
    </category>
    `;
};

const operators = function (isInitialSetup, isStage, targetId, colors) {
    const apple = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_APPLE', 'apple');
    const banana = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_BANANA', 'banana');
    const letter = ScratchBlocks.ScratchMsgs.translate('OPERATORS_LETTEROF_APPLE', 'a');
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category
        name="%{BKY_CATEGORY_OPERATORS}"
        id="operators"
        colour="${colors.primary}"
        secondaryColour="${colors.tertiary}">${thing}
        <block type="operator_add">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_subtract">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_multiply">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_divide">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_random">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_and"/>
        <block type="operator_or"/>
        <block type="operator_not"/>
        ${blockSeparator}
        ${isInitialSetup ? '' : `
            <block type="operator_join">
                <value name="STRING1">
                    <shadow type="text">
                        <field name="TEXT">${apple} </field>
                    </shadow>
                </value>
                <value name="STRING2">
                    <shadow type="text">
                        <field name="TEXT">${banana}</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_letter_of">
                <value name="LETTER">
                    <shadow type="math_whole_number">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">${apple}</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_length">
                <value name="STRING">
                    <shadow type="text">
                        <field name="TEXT">${apple}</field>
                    </shadow>
                </value>
            </block>
            <block type="operator_contains" id="operator_contains">
              <value name="STRING1">
                <shadow type="text">
                  <field name="TEXT">${apple}</field>
                </shadow>
              </value>
              <value name="STRING2">
                <shadow type="text">
                  <field name="TEXT">${letter}</field>
                </shadow>
              </value>
            </block>
        `}
        ${blockSeparator}
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_mathop">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const variables = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category
        name="%{BKY_CATEGORY_VARIABLES}"
        id="variables"
        colour="${colors.primary}"
        secondaryColour="${colors.tertiary}"
        custom="VARIABLE">
    </category>
    `;
};

const myBlocks = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="${colors.primary}"
        secondaryColour="${colors.tertiary}"
        custom="PROCEDURE">
    </category>
    `;
};
/* eslint-enable no-unused-vars */

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isInitialSetup - Whether the toolbox is for initial setup. If the mode is "initial setup",
 * blocks with localized default parameters (e.g. ask and wait) should not be loaded. (LLK/scratch-gui#5445)
 * @param {?boolean} isStage - Whether the toolbox is for a stage-type target. This is always set to true
 * when isInitialSetup is true.
 * @param {?string} targetId - The current editing target
 * @param {?Array.<object>} categoriesXML - optional array of `{id,xml}` for categories. This can include both core
 * and other extensions: core extensions will be placed in the normal Scratch order; others will go at the bottom.
 * @property {string} id - the extension / category ID.
 * @property {string} xml - the `<category>...</category>` XML for this extension / category.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @param {?string} soundName -  The name of the default selected sound dropdown.
 * @param {?object} colors - The colors for the theme.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isInitialSetup, isStage = true, targetId, categoriesXML = [],
    costumeName = '', backdropName = '', soundName = '', colors = defaultColors) {
    isStage = isInitialSetup || isStage;
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);
    soundName = xmlEscape(soundName);

    categoriesXML = categoriesXML.slice();
    const moveCategory = categoryId => {
        const index = categoriesXML.findIndex(categoryInfo => categoryInfo.id === categoryId);
        if (index >= 0) {
            // remove the category from categoriesXML and return its XML
            const [categoryInfo] = categoriesXML.splice(index, 1);
            return categoryInfo.xml;
        }
        // return `undefined`
    };
    const motionXML = moveCategory('motion') || motion(isInitialSetup, isStage, targetId, colors.motion);
    const looksXML = moveCategory('looks') ||
        looks(isInitialSetup, isStage, targetId, costumeName, backdropName, colors.looks);
    const soundXML = moveCategory('sound') || sound(isInitialSetup, isStage, targetId, soundName, colors.sounds);
    const eventsXML = moveCategory('event') || events(isInitialSetup, isStage, targetId, colors.event);
    const controlXML = moveCategory('control') || control(isInitialSetup, isStage, targetId, colors.control);
    const sensingXML = moveCategory('sensing') || sensing(isInitialSetup, isStage, targetId, colors.sensing);
    const operatorsXML = moveCategory('operators') || operators(isInitialSetup, isStage, targetId, colors.operators);
    const variablesXML = moveCategory('data') || variables(isInitialSetup, isStage, targetId, colors.data);
    const myBlocksXML = moveCategory('procedures') || myBlocks(isInitialSetup, isStage, targetId, colors.more);

    const everything = [
        xmlOpen,
        motionXML, gap,
        looksXML, gap,
        soundXML, gap,
        eventsXML, gap,
        controlXML, gap,
        sensingXML, gap,
        operatorsXML, gap,
        variablesXML, gap,
        myBlocksXML
    ];

    for (const extensionCategory of categoriesXML) {
        everything.push(gap, extensionCategory.xml);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
