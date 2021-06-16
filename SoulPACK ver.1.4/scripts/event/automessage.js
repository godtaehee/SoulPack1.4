importPackage(net.sf.odinms.client);
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 60000;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var Message = new Array("웃자팩은 하자팩으로 만들어져있습니다..","핵프로그램 사용하다 적발시 영구정지가아니라 계정,캐릭터 삭제합니다.","카페채팅방 켜두시기바랍니다..","조금이라도 불편한점이있으면 운영진에게 문의하시기바랍니다..","[한연연구소]입니다.","운영자캐릭터는 반드시 앞또는 뒤에 GM이 붙습니다.","창모드로 즐기시려면 Alt + Enter 를누르시면 창모드로 플레이하실수있습니다.","아이템 잠구기,헤제는 커닝시티에 몽땅따에게 하실수있습니다.");
    em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[Tip] " + Message[Math.floor(Math.random() * Message.length)]));
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}