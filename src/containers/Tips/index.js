import React, { Component } from 'react';
import PageContainer from '../../components/PageContainer';

const data = `
# マウスカーソルを消す方法

unclutterをインストールします。

~
$ sudo apt-get install unclutter
~

!! ~/.config/autostart/hide-cursor.desktop に以下の内容のファイルを作成します。

~
[Desktop Entry]
Type=Application
Name=Hide mouse cursor
NoDisplay=true
Exec=unclutter -idle 10
~

# 画面のスリープを抑制する方法

!! /etc/lightdm/lightdm.conf に以下の１行を追記します。

~
xserver-command=X -s 0 -dpms
~

# 電流警告を非表示にする

!! /boot/config.txt に以下の１行を追加します。

~
avoid_warnings=1
~

# RTC対応

DS34231を使った場合として説明します。

!! /boot/config.txt に以下の１行を追記します。

~
dtoverlay=i2c-rtc,ds3231
~

!! /lib/udev/hwclock-set を編集します。以下の３行をコメントアウトします。

~
if [ -e /run/systemd/system ] ; then
exit 0
fi
~

~
#if [ -e /run/systemd/system ] ; then
# exit 0
#fi
~

再起動後、ネットに接続してしばらく待つと時計が自動的に合います。
以下のコマンドで確認できます。

~
$ sudo hwclock -r
~

手動でシステム時間を書き込むには以下のコマンドを使います。

~
$ sudo hwclock -w
~

`

export default class Quiz extends Component {
  render() {
    return <PageContainer title="その他" data={data} />
  }
}