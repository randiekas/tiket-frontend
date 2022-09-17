<template>
    <v-dialog
        v-model="dialogCetak"
        persistent
        max-width="1024px">
        <v-card>
            <v-card-title>
                <span class="text-h5">Preview Cetak</span>
                <v-spacer/>
                <div>
                    <v-btn rounded small class="primary" @click="handelPrint"><v-icon left>mdi-printer-outline</v-icon>CETAK</v-btn>
                    <v-btn rounded small @click="dialogCetak=false"><v-icon left>mdi-close</v-icon>TUTUP</v-btn>
                </div>
            </v-card-title>
            <v-card-text id="section-to-print">
                <v-card outlined rounded="lg">
                <v-card-text>
                <h2 style="margin-bottom: 12px; text-align:center; display:flex; justify-content:space-between; align-items:center;">
                    <img src="/logo-trac.png" width="64px" style="margin-right: 8px;"/>
                    Surat Konfirmasi Penarikan Kendaraan dan Driver
                    <div></div>
                </h2>
                <p style="background-color: #d9d9d9;"><b>PT. SERASI AUTORAYA</b></p>
                <table style="width:100%!important; border-spacing: initial;">
                    <tbody>
                        <tr>
                            <td colspan="3"><b>DI ISI OLEH TEAM SALES</b></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td width="242px">NOMOR CUSTOMER (CMD)</td>
                            <td style="border-bottom: 1px solid black">: {{detail.no_notif}}</td>
                        </tr>
                        <tr>
                            <td class="px-1"></td>
                            <td>NAMA CUSTOMER</td>
                            <td style="border-bottom: 1px solid black">: {{detail.customer_nama}}</td>
                        </tr>
                        <tr>
                            <td class="px-1"></td>
                            <td>PIC / USER</td>
                            <td style="border-bottom: 1px solid black">: {{detail.pic_nama}}</td>
                        </tr>
                        <tr>
                            <td class="px-1"></td>
                            <td>JABATAN / BAGIAN</td>
                            <td style="border-bottom: 1px solid black">: {{detail.pic_jabatan}}</td>
                        </tr>
                        <tr>
                            <td class="px-1"></td>
								<td>NOMOR TELEPON / HP</td>
								<td style="border-bottom: 1px solid black">: {{detail.pic_telepon}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>ALAMAT PENARIKAN KENDARAAN</td>
								<td style="border-bottom: 1px solid black">: {{detail.penarikan_alamat}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>NOMOR KONTRAK</td>
								<td style="border-bottom: 1px solid black">: {{detail.kontrak_no}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>TANGGAL AKHIR KONTRAK</td>
								<td style="border-bottom: 1px solid black">: {{detail.kontrak_selesai}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>BILLING CONTROL OFFICER</td>
								<td style="border-bottom: 1px solid black">: {{detail.bco}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>NOMOR POLISI / NOMOR AKTIF</td>
								<td style="border-bottom: 1px solid black">: {{detail.no_polisi}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>NAMA DRIVER / NOTIF</td>
								<td style="border-bottom: 1px solid black">: {{detail.no_notif}}</td>
							</tr>
							<tr>
								<td colspan="3"><b>JADWAL PENARIKAN</b></td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>TANGGAL PENARIKAN</td>
								<td style="border-bottom: 1px solid black">: {{detail.penarikan_tanggal}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>WAKTU PENARIKAN</td>
								<td style="border-bottom: 1px solid black">: {{detail.penarikan_waktu}}</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>{{alasanPenarikan[detail.penarikan_alasan]}}</td>
								<td style="border-bottom: 1px solid black">: 2123232323</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>ALASAN KETERLAMBATAN (dari customer)</td>
								<td style="border-bottom: 1px solid black">: {{detail.terlambat_alasan}}</td>
							</tr>
							<tr>
								<td colspan="3"><hr/></td>
							</tr>
							<tr>
								<td colspan="3"><b>DI ISI TEAM POOL</b></td>
							</tr>
							<tr>
								<td colspan="3"><b>AKTUAL PENARIKAN TEAM POOL</b></td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>TANGGAL PENARIKAN</td>
								<td>: 2123232323</td>
							</tr>
							<tr>
								<td class="px-1"></td>
								<td>WAKTU PENARIKAN</td>
								<td>: 2123232323</td>
							</tr>
							<tr>
								<td colspan="3"><b>JAKARTA, 24 AGUSTUS 2021</b></td>
							</tr>
						</tbody>
					</table>
					<table style="width:100%!important">
						<tbody>
							<tr>
								<td align="center">
									Pemohon,
								</td>
								<td colspan="2" align="center">
									Menyetujui,
								</td>
								<td align="center">
									Mengetahui,
								</td>
							</tr>
							<tr>
								<td align="center">
									<br/><br/><br/>
								</td>
								<td align="center">
									<br/><br/><br/>
								</td>
								<td align="center">
									<br/><br/><br/>
								</td>
								<td align="center">
									<br/><br/><br/>
								</td>
							</tr>
							<tr>
								<td align="center" width="25%">
									Renaldus Robert
									<hr/>
									ACCOUNT HEAD
								</td>
								<td align="center" width="25%">
									Aryo Abimantrana<hr/>
									ADH
								</td>
								<td align="center" width="25%">
									Sukandi <hr/>
									BM
								</td>
								<td align="center" width="25%">
									Agus Widodo <hr/>
									Fleet Head
								</td>
							</tr>
						</tbody>
					</table>
					<hr/>
					<table style="width:100%!important">
						<tbody>
							<tr>
								<td colspan="3"><b>DI ISI JIKA KETERLAMBATAN DARI PIHAK INTERNAL</b></td>
							</tr>
							<tr>
								<td></td>
								<td>Alasan Keterlambatan</td>
								<td>: 2123232323</td>
							</tr>
						</tbody>	
					</table>
					<table style="width:100%!important">
						<tbody>
							<tr>
								<td align="center">
									Pemohon,
								</td>
								<td colspan="2" align="center">
									Menyetujui,
								</td>
								<td align="center">
									Mengetahui,
								</td>
							</tr>
							<tr>
								<td align="center">
									<br/><br/><br/>
								</td>
								<td align="center">
									<br/><br/><br/>
								</td>
								<td align="center">
									<br/><br/><br/>
								</td>
								<td align="center">
									<br/><br/><br/>
								</td>
							</tr>
							<tr>
								<td align="center" width="25%">
									Renaldus Robert
									<hr/>
									ACCOUNT HEAD
								</td>
								<td align="center" width="25%">
									Aryo Abimantrana<hr/>
									ADH
								</td>
								<td align="center" width="25%">
									Sukandi <hr/>
									BM
								</td>
								<td align="center" width="25%">
									Agus Widodo <hr/>
									Fleet Head
								</td>
							</tr>
						</tbody>
					</table>
					</v-card-text>
					</v-card>
				</v-card-text>
			</v-card>
		</v-dialog>
</template>
<script>
export default {
    props: [ 'dialogCetak', 'detail' ],
    methods:{
        handelPrint: function(){
			window.print()
		}
    }
}
</script>
<style>
@media print {
    
    @page {
        size: 8.27in 11.69in;
    }

    body * {
        visibility: hidden;
    }

    #section-to-print, #section-to-print * {
        visibility: visible;
        top: -55px
    }

    .table-smaller{
        border-spacing: initial;
    }

}
</style>