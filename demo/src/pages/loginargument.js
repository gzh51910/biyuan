import React from 'react';
import '../css/loginargument.scss';
import { Icon } from 'antd';
function loginargument({ history }) {
    function tiao() {
        history.push(`/Login`),
            console.log(111);

    }

    return (
        <div className="bxiyi">
            < div className="xb" > <Icon type="left" className="xieyiback" onClick={tiao} /></div>

            <h2 className="xieyi">币源社区用户协议</h2>
            <div className="line"></div>
            <div className="text">
                <p className="tit">第一章 总则</p>
                <p>第1条 本网站命名为'币源社区'。</p>
                <p>第2条 本网站所有权、经营权均属北京币源网络科技发展有限公司，以下简称币源社区。</p>
                <p>第3条 本网站的管理维护由币源社区负责。</p>

                <p className="tit">第二章 论坛用户</p>
                <p>第4条 遵守币源社区用户服务条款，并且在币源社区网站注册的用户可成为币源社区论坛注册用户（以下简称"论坛用户"），拥有论坛用户基本权限。论坛用户参与论坛活动时必须遵守《币源社区用户条款》。当您的论坛帐号连续6个月或以上未登录论坛，币源社区论坛有权冻结该帐号论坛资料。</p>
                <p>第5条 本论坛用户的个人资料受到保护，不接受任何个人或单位的查询请求，公安机关和司法部门或根据国家相关法律规定提供除外。</p>
                <p>第6条 本论坛用户享有在论坛各公开栏目发表言论的权利，若栏目中有特殊规定，或受到论坛处罚而关闭发言权限则例外。</p>
                <p>第7条 本论坛用户有权依照申请流程申请志愿者；本论坛用户有权依照申请流程申请开设论坛新版。</p>
                <p>第8条 本论坛用户有义务遵守国家法律法规及本论坛各项规章制度。</p>
                <p>第9条 本论坛用户有义务遵守网络礼仪。</p>

                <p className="tit">第三章 言论规则</p>
                <p>第10条 本论坛用户享有言论自由权利；并适度拥有修改、删除自己发表的文章的权利。</p>
                <p>第11条 本论坛用户不得在本论坛发表包含以下内容的言论：</p>
                <p>（一）违反宪法确定的基本原则的；</p>
                <p>（二）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>
                <p>（三）损害国家荣誉和利益的；</p>
                <p>（四）**民族仇恨、民族歧视，破坏民族团结的；</p>
                <p>（五）破坏国家宗教政策，宣扬**和封建迷信的；</p>
                <p>（六）散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
                <p>（七）散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</p>
                <p>（八）侮辱或者诽谤他人，侵害他人合法权益的；</p>
                <p>（九）**非法集会、结社、游行、示威、聚众扰乱社会秩序的；</p>
                <p>（十）以非法民间组织名义活动的；</p>
                <p>（十一）含有法律、行政法规禁止的其他内容的。</p>
                <p>第12条 本论坛用户在相关讨论区发表文章时，除遵守本条款外，还应遵守讨论坛的相关规定。</p>
                <p>第13条 未经币源社区同意，禁止在本论坛内发布任何形式的广告。</p>

                <p className="tit">第四章 论坛管理</p>
                <p>第14条 本论坛设定相关的版块管理人员体系。</p>
                <p>第15条 本论坛站长由北京币源网络科技发展有限公司员工担任；站长行使本论坛全部站务管理职责和权力；站长代表本论坛官方立场，除站长之外的任何论坛管理人员及网友言论，由其本人承担，均与本论坛立场无关。</p>
                <p>第16条 本论坛内容监察工作由币源社区内容监督组负责。</p>
                <p className="tit">第五章 网站版权声明</p>
                <p>第17条 币源社区用户发表的文章仅代表作者本人观点，与北京币源网络科技发展有限公司立场无关。作者文责自负。</p>
                <p>第18条 北京币源网络科技发展有限公司有权将在本网站发表的文章或图片自行使用或者与其他人合作使用于其他用途，包括但不限于网站、电子杂志、杂志、刊物等，使用时需为作者署名，以发表文章时注明的署名为准。文章有附带版权声明者除外。</p>
                <p>第19条 币源社区发布的文章及图片（包括转载的文章及图片）版权仅归原作者所有，若作者有版权声明或原作从其它网站转载而附带有原版权声明者，其版权归属以附带声明为准。本社区的部分新闻转自互联网，如果转载不符合您的意愿或侵犯您的版权，请联系我们，我们会尽快删除。</p>
                <p>第20条 任何转载、引用发表于本论坛的版权文章须符合以下规范： </p>
                <p>（1）用于非商业、非盈利、非广告性目的时需注明作者及文章及图片的出处为"币源社区"或“coingogo.com”，并且跳转到原文</p>
                <p>（2）用于商业、盈利、广告性目的时需征得文章或图片原作者的同意，并注明作者姓名、授权范围及原作出处"币源"或"coingogo.com"。</p>
                <p>（3）任何文章或图片的修改或删除均应保持作者原意并征求原作者同意，并注明授权范围。</p>
                <p>（4）币源社区上发布的内容，包括但不限于：文字报导、图片、声音、录像、图表、标志、标识、广告、商标、商号、域名、软件、程序、版面设计以及为注册用户提供的任何或所有信息，为币源社区所有或合法使用，任何媒体、网站或个人未经或相关权利人书面授权或同意不得转载、摘编或利用其它方式使用上述内容；已经授权或同意的，应在授权或同意范围内使用，并注明"来源：www.coingogo.com"。违反上述声明者，本网将追究其相关法律责任。</p>
                <p className="tit">第六章 处罚原则</p>
                <p>第21条 币源社区用户不得在本网站进行任何违反国家法律法规及论坛各项规章制度的活动，不得在本论坛进行任何破坏公共安全的活动，不得在本论坛进行任何非法商业活动，不得在本论坛进行任何破坏论坛、聊天室公共秩序的活动，如有违反，论坛管理人员将依据有关规定进行处罚。</p>
                <p>第22条 本论坛用户不得利用论坛BUG进行任何活动，如有违反，论坛有权作出关闭其部分权限、暂停帐号使用直至删除帐号处理，同时论坛保留追究责任人法律及经济责任的权利。</p><p className="tit">第七章 免责声明 </p>
                <p>第23条 本论坛用户之间通过论坛相识、交往中所发生或可能发生的任何心理、生理上的伤害和经济上的纠纷与损失，北京币源网络科技发展有限公司不承担任何责任。用户可以及时与本论坛的管理人员联系。具体的联系方法为：admin@coingogo.com </p>
                <p>第24条 本论坛用户因为违反本论坛规定而触犯中华人民共和国法律的，责任自负，北京币源网络科技发展有限公司。</p>
                <p>第25条 本论坛如因系统维护或升级而需暂停服务时，将事先公告。若因硬件故障或其它不可抗力而导致暂停服务，于暂停服务期间造成的一切不便与损失，北京币源网络科技发展有限公司不承担任何责任。</p>
                <p>第26条 数字货币交易具有极高的风险（预挖、暴涨暴跌、庄家操控、团队解散、技术缺陷等），据国家五部委《关于防范比特币风险的通知》，币源社区仅为数字货币的爱好者提供一个自由的信息交互平台，对币的投资价值不承担任何审查、担保、赔偿的责任，如果您不能接受，请不要进行注册！谢谢！</p>
                <p>第27条 用户明确同意其使用币源社区服务所存在的风险将完全由其自己承担；因其使用币源社区服务而产生的一切后果也由其自己承担，币源社区对用户不承担任何责任。</p>
                <p>第28条 币源社区所提供的任何信息（包括但不限于币源社区官方提供的、外部获取的、币源社区邀请的他人发布的），币源社区并不能保证其完全实时或完全准确，也不表明币源社区证实其描述或赞同其观点。所有内容仅供参考，不构成投资建议或者其他实际的操作意见，用户据此操作所造成的后果自行负责。                                                                                                                                                                                                         </p>
                <p>第29条 币源社区不保证服务一定能满足用户的要求，也不保证服务不会中断，对服务的及时性、安全性、准确性也都不作保证。对于各种原因造成的网络服务中断、资料丢失、数据损毁或其他缺陷，币源社区不承担任何责任。                                                                                                                                                                                                                                                                                     </p>
                <p>第30条 用户明确同意使用币源社区的风险由用户个人承担。对于所有的用户注册资料、姓名、身份、手机以及其他行为，币源社区拒绝提供任何担保。                                                                                                                                                                                                                                                                                                                                                       </p>
                <p>第31条 用户同意，对于币源社区因为黑客攻击、水灾、风灾、旱灾、地震、战争、封锁、政府禁令等不可抗力事件，而导致用户资料意外泄漏，币源社区并不对此负责。                                                                                                                                                                                                                                                                                                                                       </p>

                <p className="tit">第八章 风险提示、责任及义务                                                                                                                                                                                                                                                                                                                                                                                                                                                                </p>
                <p>第32条 虚拟币交易有极高的风险。                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                <p>第33条 虚拟币市场是全新的、未经确认的，而且可能不会增长。目前，虚拟币主要由投机者大量使用，零售和商业市场使用相对较少，因此虚拟币价格易产生波动，并进而对虚拟币投资产生不利影响。                                                                                                                                                                                                                                                                                                          </p>
                <p>第34条 虚拟币市场没有像中国股市那样的涨跌停限制，同时交易是24小时开放的。虚拟币由于筹码较少，价格易受到庄家控制，有可能出现一天价格涨几倍的情况，同时也可能出现一天内价格跌去一半的情况。                                                                                                                                                                                                                                                                                                  </p>
                <p>第35条 参与虚拟币交易，用户应当自行控制风险，评估虚拟币投资价值和投资风险，承担损失全部投资的经济风险。                                                                                                                                                                                                                                                                                                                                                                                    </p>
                <p>第36条 因国家法律、法规和规范性文件的制定或者修改，导致虚拟币的交易被暂停、或者禁止的，因此造成的经济损失全部由用户自行承担。                                                                                                                                                                                                                                                                                                                                                              </p>
                <p>第37 条责任和义务                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </p>
                <p>（1）用户须保证他们是账号合法的拥有者，用户对币源社区服务的使用必须遵守所有适用于服务的地方法律、国家法律和国际法律。                                                                                                                                                                                                                                                                                                                                                                      </p>
                <p>（2）由网络连接造成的故障，崩溃，延迟或扰乱，或由于任何原因网站在任何时候或期间不可用，币源社区均不负责任。币源社区上链接的第三方网站的内容仅供参考。我们对这些网站和资源没有控制权，不负有责任，您个人因使用这些信息而发生损失或损害我们对此不负责任。                                                                                                                                                                                                                                    </p>
                <p>（3）对于诈骗，币源社区会向相关政府机构举报，并向其提供所有必要的信息，包括名字，地址和其他要求的信息。用户应知晓到在相关政府部门要求调查诈骗或任何非法活动时，其账号可能随时被冻结。                                                                                                                                                                                                                                                                                                      </p>
                <p>（4）用户应遵守币源社区的所有条款规定，不得以任何方式干扰币源社区的服务。                                                                                                                                                                                                                                                                                                                                                                                                                  </p>

                <p className="tit">第九章 服务条款                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                <p>第38条 欢迎申请使用币源社区（www.coingogo.com）提供的服务。本协议由服务使用人（以下称"用户"）与币源社区共同缔结的协议，请您仔细阅读以下全部条款内容。如用户不同意本服务条款任意内容，请不要注册或使用币源社区服务。如用户一经注册即视为认可及接受本协议所有条款。此后，用户不得以未阅读本服务条款内容作任何形式的抗辩。用户注册成功后，币源社区将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户自行负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。          </p>

                <p className="tit">第十章 服务内容                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                <p>第39条 币源社区具体的服务内容由币源社区提供，例如数字资产行情、资讯、论坛、交易汇等，用户必须遵守本服务条款下使用币源社区提供的服务。币源社区并不承诺服务在开始、变更或者结束时，均事先通知用户。                                                                                                                                                                                                                                                                                          </p>
                <p>第40条 币源社区的服务若涉及收费的网络交易服务，我们会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关交易费用，用户才能使用该收费的网络交易服务。如用户拒绝支付相关交易费用，则币源社区有权不向用户提供该收费的网络交易服务。                                                                                                                                                                                                                                          </p>

                <p className="tit">第十一章 条款更改、添加或删除                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                <p>第41条 币源社区有随时更改、添加或删除部分条款的最终决定权。一旦更改条款，币源社区将提前一个月通过用户的账户告知其条款的更改，必要时会在网站首页给以公告。用户在收到通知后，有责任检查修订的条款。条款公布后如若用户继续使用币源社区服务，则视为接受这些条款的变更，并同意以后在使用币源社区服务时须遵循这些条款。                                                                                                                                                                          </p>

                <p className="tit">第十二章 服务变更、中断或终止                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                <p>第42条 鉴于互联网服务的特殊性，用户同意币源社区有权随时变更、中断或终止部分或全部的网络服务（包括收费的网络交易服务）。如变更、中断或终止的网络服务，币源社区无需通知用户，也无需对任何用户或任何第三方承担任何责任。                                                                                                                                                                                                                                                                      </p>

                <p className="tit">第十三章 用户帐号和隐私保护                                                                                                                                                                                                                                                                                                                                                                                                                                                                </p>
                <p>第43条 币源社区为了保障用户账号信息安全，用户须同意以下条款：                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                <p>（1）用户有责任保管好自己的账号信息及密码，以及在此账号下发生的包括网络交易在内的任何活动。                                                                                                                                                                                                                                                                                                                                                                                                </p>
                <p>（2）当发生非本人授权的账号或密码登录，或任何违反服务条款的登录，用户须立即通知币源社区。                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                <p>（3）由于他人使用自己账号和密码而导致币源社区或平台其他用户带来的任何损失，用户须对此负责。                                                                                                                                                                                                                                                                                                                                                                                                </p>
                <p>（4）任何情况下用户不得使用除自己账号以外的其他任何账号登录，否则币源社区有权冻结此类审查此类账号。                                                                                                                                                                                                                                                                                                                                                                                        </p>
                <p>（5）用户同意提供在注册过程中按系统要求提供的准确，最新，完整的个人信息给币源社区，并保证这些信息是最新的。                                                                                                                                                                                                                                                                                                                                                                                </p>
                <p>（6）对于用户使用非法手段或者违反社区规则的行为，币源社区有权采取禁止登录、禁用帐号、没收资产等措施。                                                                                                                                                                                                                                                                                                                                                                                      </p>
                <p>第44条 隐私保护：用户在创建账号使用币源社区时，会被要求提供个人信息，这些个人信息将被保密。非经用户许可，币源社区保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在币源社区的非公开内容，但下列情况除外：遵守有关法律、法规的规定，包括在国家有关机关查询时，提供用户的注册信息，存储资料，以及用户在币源社区的操作记录等。                                                                                                                                        </p>

                <p className="tit">第十四章 适用法律和管辖权、解释权                                                                 </p>
                <p>第45条 本协议适用中华人民共和国的法律，并且排除一切冲突法律法规的适用。如出现纠纷，用户和币源社区一致同意将纠纷交由币源社区所在地法院管辖。在法律允许的最大范围内，币源社区保留对本服务条款的最终解释权。在适用法律界定下遇到不可抗力事件时，受影响一方的责任将被暂缓，等待解决办法。如果有关司法机关认为条款的任何规定不能强制履行，则在最大允许范围内实施该规定，其余规定依然生效。                                                                                                      </p>

                <p className="tit">第十五章 附责、通知和联系                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                <p>第46条 用户知晓并且同意，币源社区的各类通知，通过网页公告、系统通知、官方管理帐号通知（公开或者私下）、电子邮件或者常规信件进行，通知发出时，即被视为已送达收件人。 用户对币源社区的通知，可通过币源社区官方电子邮件jiaojingbo@coingogo.com联系我们。                                                                                                                                                                                                                                      </p>
                <p>第47条 北京币源网络科技发展有限公司保留修改完善本条款的权利。                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                <p>第48条 本条款自2016年12月28日正式颁布施行。                                                                   </p>
                <div className="line"></div>
            </div>
            <div className="statement">
                <p>北京币源网络科技发展有限公司</p>
                <p>二零一六年十二月</p>
            </div>
        </div>
    )

}


export default loginargument